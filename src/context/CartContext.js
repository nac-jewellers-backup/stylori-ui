import React, { useEffect } from "react";
import { useGraphql } from "hooks/GraphqlHook";
import { CART, FetchSku, FetchCartId } from "queries/cart";
import { ORDERSUCCESSFUL } from "queries/cart";
import { ALLORDERS } from "queries/cart";
import { ALLUSERWISHLISTS } from "queries/cart";
import { withRouter } from "react-router-dom";
import { useNetworkRequest } from "hooks/NetworkHooks";
import { API_URL } from "config";
import axios from "axios";
var orderobj = {};
var orderobj1 = {};
var objallorder = {};
var objwishlist = {};
// let setFilter;
const initialCtx = {
  CartCtx: {
    cartFilters: {
      skuId: "",
      qty: "",
      price: "",
      user_id: "",
      discounted_price: "",
      tax_price: "",
      reload: "",
      jewellery: "",
      _cart_id: {},
      vouchercode: null,
      comboProducts:[],
      comboFetched:[]
    },
    loading: false,
    error: false,
    data: [],
    allorderdata: [],
    wishlistdata: [],
    wishlist_count: [],
    noproducts: false,
    NewUser: {},
    loadingWishlist: false,
  },
  setCartFilters: (filterData) => {},
  setallorderdata: () => {},
  setwishlist_count: () => {},
  setwishlistdata: () => {},
  setNoproducts: () => {},
  setNewUser: () => {},
  setLoading: () => {},
  setLoadingWishlist: () => {},
  // setCartId:() =>{}
};
export const CartContext = React.createContext(initialCtx);
export const CartConsumer = CartContext.Consumer;
const Provider = (props) => {
  const [cartFilters, setCartFilters] = React.useState(initialCtx.CartCtx);
  const [allorderdata, setallorderdata] = React.useState([]);
  const [wishlistdata, setwishlistdata] = React.useState([]);
  const [wishlist_count, setwishlist_count] = React.useState([]);
  const [noproducts, setNoproducts] = React.useState(false);
  const [NewUser, setNewUser] = React.useState({});
  const [loadingWishlist, setLoadingWishlist] = React.useState(false);
  // const [_cart_id, setCartId] = React.useState([])

  useEffect(() => {
    let user_ids = localStorage.getItem("user_id") ?? "";
    let user_ids_Obj = {
      user_id: user_ids,
    };
    const updateCart = (user_ids_Obj) => {
      let accessTokens = localStorage.getItem("accessToken")
        ? localStorage.getItem("accessToken")
        : "";

      fetch(`${API_URL}/updatecart_latestprice`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(user_ids_Obj),
      })
        .then((res) => res.json())
        .then((data) => {})
        .catch((err) => {});
    };
    user_ids.length > 0 && updateCart(user_ids_Obj);
  }, []);

  var products = localStorage.getItem("cartDetails")
    ? JSON.parse(localStorage.getItem("cartDetails")).products
    : [];
  const user_id = cartFilters.user_id ? cartFilters.user_id : "";
  const price = cartFilters.price ? cartFilters.price : "";
  const {
    loading: crtloading,
    error: crterror,
    data: crtdata,
    makeFetch: addtocart,
  } = useNetworkRequest("/addtocart", { user_id, products }, false);
  const userIds = localStorage.getItem("user_id")
    ? localStorage.getItem("user_id")
    : "";
  var cartdetails =
    JSON.parse(localStorage.getItem("cartDetails")) &&
    JSON.parse(localStorage.getItem("cartDetails")).products.length > 0 &&
    Object.keys(
      JSON.parse(localStorage.getItem("cartDetails"))?.products?.filter(
        (val) => {
          if (Object.keys(val).length > 0) return val;
        }
      )
    ).length > 0
      ? JSON.parse(localStorage.getItem("cartDetails"))?.products?.filter(
          (val) => {
            if (Object.keys(val).length > 0) return val;
          }
        )[0].sku_id
      : {};

  const guestlogId = cartFilters.user_id ? cartFilters.user_id : "";
  const {
    loading: allorderloading,
    error: allordererror,
    data: allorder,
    makeRequest: allordermakeRequest,
  } = useGraphql(ALLORDERS, () => {}, {}, false);
  const {
    loading: allorderloadingsuccesful,
    error: allordererrorsuccesful,
    data: allordersuccesful,
    makeRequest: allordermakeRequestSuccessful,
  } = useGraphql(ORDERSUCCESSFUL, () => {}, {}, false);

  const {
    loading: wishlistloading,
    error: wishlisterror,
    data: wishlistDATA,
    makeRequest: wishlistmakeRequest,
  } = useGraphql(ALLUSERWISHLISTS, () => {}, {}, false);

  const { loading, error, data, makeRequest } = useGraphql(CART, () => {}, {});
  // const prices = cartFilters.price ? cartFilters.price : ''
  const discounted_price = cartFilters.discounted_price
    ? cartFilters.discounted_price
    : "";
  const reload = cartFilters.reload ? cartFilters.reload : "";
  const jewellery = cartFilters.jewellery ? cartFilters.jewellery : "";

  var con_gust = localStorage.getItem("gut_lg")
    ? JSON.parse(localStorage.getItem("gut_lg"))
    : "";
  const myStorage = sessionStorage.getItem("user_id");
  const localvalues_check =
    JSON.parse(localStorage.getItem("gut_lg")) === true ? true : false;
  const order_idx = localStorage.getItem("order_id")
    ? JSON.parse(localStorage.getItem("order_id"))
    : "yourorder";
  let gut_lg = localStorage.getItem("gut_lg")
    ? JSON.parse(localStorage.getItem("gut_lg"))
    : {};

  useEffect(() => {
    if (localvalues_check === true) {
      if (con_gust === true) {
        if (!myStorage) {
          localStorage.clear();
          sessionStorage.clear();
        }
      }
    }
  }, []);

  useEffect(() => {
    
    var products = [];
    var _cartDetails = {};
    if (!loading && !error) {
      if (
        data &&
        data.data &&
        data.data.allTransSkuLists &&
        data.data.allTransSkuLists.nodes &&
        data.data.allTransSkuLists.nodes.length > 0
      ) {
        data.data.allTransSkuLists.nodes.map((val) => {
          var obj = {};
          obj["sku_id"] = val.generatedSku;
          obj["qty"] = 1;
          obj["price"] = val.markupPrice;
          products.push(obj);
        });

        _cartDetails["cart_id"] = "";
        _cartDetails["userId"] = "";
        _cartDetails["products"] = products;
        if (localvalues_check && localvalues_check === false) {
          localStorage.removeItem("bil_isactive");
          localStorage.removeItem("ship_isactive");
          localStorage.removeItem("select_addres");
          // window.location.reload()
        }
        localStorage.setItem("cartDetails", JSON.stringify(_cartDetails));
      }
    }
  }, [loading, error, data]);

  useEffect(() => {
    if (jewellery && jewellery === "jewellery") {
      localStorage.removeItem("panel");
      localStorage.removeItem("cartDetails");
      localStorage.removeItem("ship_isactive");
      localStorage.removeItem("bil_isactive");
      window.location.pathname = `/paymentsuccess/${order_idx}`;
    }

    if (
      crtdata &&
      Object.keys(crtdata).length > 0 &&
      crtdata.constructor === Object
    ) {
      localStorage.setItem("cart_id", JSON.stringify(crtdata));
      updateProductList();
      cartFilters["_cart_id"] = crtdata;
      // _cart_id:crtdata
      setCartFilters({ cartFilters });
    }
    if (reload && reload.length > 0) {
      window.location.reload();
    }

    // localStorage.setItem('cart_id', JSON.stringify(crtdata))
  }, [crtdata]);

  useEffect(() => {
    const orderall = allorder
      ? allorder &&
        allorder.data &&
        allorder.data.allOrders &&
        allorder.data.allOrders.nodes
      : "";
    if (orderall && orderall.length > 0) {
      objallorder["allorderdata"] = allorder.data.allOrders;
      // localStorage.setItem("allorder", allorder.data.allOrders)
      setallorderdata(objallorder);
    }
  }, [allorder, allorderdata]);

  useEffect(() => {
    var obj_aishlist_count = {};
    const wishlistdatas = allorder
      ? wishlistDATA &&
        wishlistDATA.data &&
        wishlistDATA.data.allUserWhislists &&
        wishlistDATA.data.allUserWhislists.nodes
      : "";
    if (wishlistdatas && wishlistdatas.length > 0) {
      objwishlist["wishlistdata"] = wishlistDATA?.data?.allUserWhislists;
      setTimeout(() => {
        setLoadingWishlist(false);
      }, 2000);

      setwishlistdata(objwishlist);
    }
  }, [wishlistDATA]);

  useEffect(() => {
    orderobj["userProfileId"] = userIds;
    orderobj1["userprofileId"] = userIds;
    if (userIds) wishlistmakeRequest(orderobj1);
    orderobj["userProfileId"] = localStorage.getItem("user_id");
    if (
      (window.location.pathname === "/account-allorders" ||
        window.location.pathname === "/account-addresses" ||
        window.location.pathname === "/account-shoppingcart" ||
        window.location.pathname === "/account-wishlist" ||
        window.location.pathname === "/account-profile") &&
      Object.values(orderobj).length > 0
    )
      allordermakeRequest(orderobj);
  }, [wishlistdata]);

  const ordersuccessful = async () => {
    var _obj = {};
    _obj["orderId"] = { id: props.match.params.id };
    if (props.match.params.id) await allordermakeRequestSuccessful(_obj);
  };

  const handleAddToCart = () => {
    if (guestlogId.length > 0) {
      //
      // alert(JSON.stringify(guestlogId))
      localStorage.setItem("user_id", cartFilters.user_id);

      if (JSON.stringify(cartdetails).length > 0) {
        let products = [];
        products = localStorage.getItem("cartDetails")
          ? JSON.parse(localStorage.getItem("cartDetails")).products
          : "";
        const comboProducts = localStorage.getItem("comboProducts")
        if(comboProducts){
          const combo_ = JSON.parse(comboProducts);
          const nonComboProducts = products?.filter(item => !combo_.includes(item.sku_id));
          products = nonComboProducts
        }
        const user_id = cartFilters.user_id;
        let combo_products = []
        const comboProdSession = localStorage.getItem("guestComboCheckOut")
        if(comboProdSession){
          const combo = JSON.parse(localStorage.getItem("guestComboCheckOut"));
          combo_products = combo
        }
        var addcart = { products, user_id, combo_products };
        
        // alert("hgdhfdhg")
        if (
          JSON.parse(localStorage.getItem("cartDetails"))?.products?.filter(
            (val) => {
              if (Object.keys(val).length > 0) return val;
            }
          ).length > 0
        ) {
          if(user_id &&
            products &&
            products.length &&
            products[0] != null
            ){
              addtocart(addcart)
          }else if(user_id && combo_products?.length > 0){
            addtocart(addcart)
          }
        }
        orderobj["userProfileId"] = user_id;
        sessionStorage.setItem("user_id", user_id);
        orderobj["userProfileId"] = localStorage.getItem("user_id");
        if (
          (window.location.pathname === "/account-allorders" ||
            window.location.pathname === "/account-addresses" ||
            window.location.pathname === "/account-shoppingcart" ||
            window.location.pathname === "/account-wishlist" ||
            window.location.pathname === "/account-profile") &&
          Object.values(orderobj).length > 0
        )
          allordermakeRequest(orderobj);
      }
    } else {
      var local_storage = JSON.parse(localStorage.getItem("cartDetails"));
      var local_storage_products = [];
      if (
        local_storage &&
        Object.entries(local_storage).length > 0 &&
        local_storage.constructor === Object
      ) {
        local_storage_products = JSON.parse(
          localStorage.getItem("cartDetails")
        ).products.map((val) => {
          return val;
        });
      }
      var skuId = cartFilters.skuId;
      var products = [];
      var productszz = [];
      var obj = {};
      var cartId = "";
      var userId = "";
      var obj = { sku_id: "", qty: "", price: "" };
      obj["sku_id"] = skuId;
      obj["qty"] = cartFilters.qty;
      obj["price"] = cartFilters.price;
      productszz.push(obj);

      var products_sku_list = () => {
        if (local_storage_products.length > 0) {
          local_storage_products.push(obj);
          return local_storage_products;
        } else {
          products.push(obj);
          return products;
        }
      };

      var skuObj = {
        cart_id: cartId,
        user_id: userId,
        products: products_sku_list(),
      };
      if (skuId) localStorage.setItem("cartDetails", JSON.stringify(skuObj));

      // window.location.reload()
    }
  };
  useEffect(() => {
    handleAddToCart();
    
  }, [user_id, price, cartFilters]);

  var skus;

  skus =
    localStorage.getItem("cartDetails") &&
    JSON.parse(localStorage.getItem("cartDetails")).products.length > 0
      ? JSON.parse(localStorage.getItem("cartDetails"))
          ?.products?.filter((val) => {
            if (Object.keys(val).length > 0) return val;
          })
          .map((val) => val.sku_id)
      : "";
  // JSON.parse(localStorage.getItem("cartDetails")).products.map(val => val.sku_id) : ''
  const _qty = () => {
    var obj = {};
    if (
      localStorage.getItem("cartDetails") &&
      JSON.parse(localStorage.getItem("cartDetails")).products.length > 0
    ) {
      JSON.parse(localStorage.getItem("cartDetails"))
        .products.filter((val) => {
          if (Object.keys(val).length > 0) return val;
        })
        .map((val) => {
          obj[val.sku_id] = val.qty;
        });
    }
    localStorage.setItem("quantity", JSON.stringify(obj));
  };

  const updateProductList = async () => {
    let variables;
    if (localStorage.getItem("user_id")) {
      const status = (response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      };

      const json = (response) => {
        return response.json();
      };
      var a = {};
      let pathnameSplit = window.location.pathname.split("/");
      const splitHiphen = () => {
        if (pathnameSplit[1].indexOf("-")) {
          return pathnameSplit[1].split("-");
        }
      };

      var _conditionfetchCartId = {
        UserId: { userprofileId: localStorage.getItem("user_id") },
      };

      //  alert(JSON.stringify(this.state.checked))
      await axios
        .post(
          `${API_URL}/graphql`,
          JSON.stringify({
            query: FetchCartId,
            variables: { ..._conditionfetchCartId },
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )

        .then(async (val) => {
          val = val.data;
          const comboItems = val?.data?.allShoppingCarts?.nodes?.[0]?.shoppingCartItemsByShoppingCartId?.nodes?.filter((item) => item?.isComboOffer === true);
          setCartFilters({
            ...cartFilters,comboProducts:comboItems
          })
          // JSON.parse(localStorage.setItem("quantity",comboQty))
          let cartItems = Boolean(
            val.data.allShoppingCarts.nodes?.[0]?.shoppingCartItemsByShoppingCartId?.nodes?.length > 0
          )
            ? val.data.allShoppingCarts.nodes[0]
                .shoppingCartItemsByShoppingCartId.nodes
            : [];

          let localStorageCartDetails = JSON.parse(
            localStorage.getItem("cartDetails")
          );
          let localStorageQty = JSON.parse(localStorage.getItem("quantity"));
          let _qty = {};
          let _checkValid =
            localStorageCartDetails && localStorageCartDetails.products
              ? localStorageCartDetails.products
              : [];

          if (localStorageCartDetails) {
            cartItems.map((valresult) => {
              localStorageCartDetails = JSON.parse(
                localStorage.getItem("cartDetails")
              );
              localStorageQty = JSON.parse(localStorage.getItem("quantity"));
              if (_checkValid.length > 0) {
                _checkValid.map((valProducts, i) => {
                  localStorageCartDetails = JSON.parse(
                    localStorage.getItem("cartDetails")
                  );
                  localStorageQty = JSON.parse(
                    localStorage.getItem("quantity")
                  );
                  if (localStorageQty) {
                    if (valProducts.sku_id === valresult.productSku) {
                      localStorageCartDetails.products[i].qty = valresult.qty;
                      localStorageQty[valresult.productSku] = valresult.qty;
                      localStorage.setItem(
                        "quantity",
                        JSON.stringify({ ...localStorageQty })
                      );
                      localStorage.setItem(
                        "cartDetails",
                        JSON.stringify({ ...localStorageCartDetails })
                      );
                    } else if (
                      !Boolean(localStorageQty[valresult.productSku])
                    ) {
                      let _newProductQty = {};
                      let _newProduct = {};
                      _newProductQty[valresult.productSku] = valresult.qty;
                      localStorageQty = {
                        ...localStorageQty,
                        ..._newProductQty,
                      };
                      _newProduct["sku_id"] = valresult.productSku;
                      _newProduct["price"] = valresult.price;
                      _newProduct["qty"] = valresult.qty;

                      localStorageCartDetails["products"].push({
                        ..._newProduct,
                      });
                      localStorage.setItem(
                        "quantity",
                        JSON.stringify({ ...localStorageQty })
                      );
                      localStorage.setItem(
                        "cartDetails",
                        JSON.stringify({ ...localStorageCartDetails })
                      );
                    }
                  } else {
                    let _newProductQty = {};
                    _newProductQty[valresult.productSku] = valresult.qty;
                    localStorage.setItem(
                      "quantity",
                      JSON.stringify({ ..._newProductQty })
                    );
                  }
                });
              } else {
                let _newProductQty = {};
                let _newProduct = {};
                _newProductQty[valresult.productSku] = valresult.qty;
                _newProduct["sku_id"] = valresult.productSku;
                _newProduct["price"] = valresult.price;
                _newProduct["qty"] = valresult.qty;

                localStorageQty = { ..._newProductQty };
                localStorageCartDetails["products"].push({ ..._newProduct });
              }
            });
          } else {
            var skuObj = { cart_id: "", user_id: "userId", products: [] };
            let _newProductQty = {};
            let _newProduct = {};
            cartItems.map((valresult) => {
              _newProductQty[valresult.productSku] = valresult.qty;
              _newProduct["sku_id"] = valresult.productSku;
              _newProduct["price"] = valresult.price;
              _newProduct["qty"] = valresult.qty;

              skuObj["products"].push({ ..._newProduct });
            });
            localStorage.setItem(
              "quantity",
              JSON.stringify({ ..._newProductQty })
            );
            localStorage.setItem("cartDetails", JSON.stringify({ ...skuObj }));
          }

          if (
            val &&
            val.data &&
            val.data.allShoppingCarts &&
            val.data.allShoppingCarts.nodes &&
            val.data.allShoppingCarts.nodes.length > 0 &&
            val.data.allShoppingCarts.nodes[0].status !== "pending"
          ) {
            var _user_id = { user_id: localStorage.getItem("user_id") };
            var session_storage = JSON.parse(
              sessionStorage.getItem("updatedProduct")
            );
            var _products = { products: [session_storage] };
            var _obj = { ..._user_id, ..._products };
            _user_id &&
              _products.products &&
              _products.products.length &&
              _products.products[0] !== null &&
              fetch(`${API_URL}/addtocart`, {
                method: "post",

                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ..._obj,
                }),
              })
                .then(status)
                .then(json)
                .then(async function (data) {
                  if (
                    data &&
                    data.data &&
                    data.data.allShoppingCartItems &&
                    data.data.allShoppingCartItems.nodes &&
                    data.data.allShoppingCartItems.nodes.length > 0
                  ) {
                    var _data = data?.data?.allShoppingCartItems?.nodes
                      ?.filter((val) => {
                        if (val.transSkuListByProductSku) return val;
                      })
                      .map((val) => {
                        return val.transSkuListByProductSku.generatedSku;
                      });
                    variables = { productList: _data };

                    makeRequest(variables);
                  } else {
                    return [];
                  }
                });

            if (_products.products[0] == null) {
              let _data = [];
              val.data.allShoppingCarts.nodes[0].shoppingCartItemsByShoppingCartId.nodes.map(
                (l) => _data.push(l.productSku)
              );
              variables = { productList: _data };
              _data && makeRequest(variables);
            }
          } else {
            if (
              val &&
              val.data &&
              val.data.allShoppingCarts &&
              val.data.allShoppingCarts.nodes &&
              val.data.allShoppingCarts.nodes.length > 0 &&
              val.data.allShoppingCarts.nodes[0] &&
              val.data.allShoppingCarts.nodes[0].id
            ) {
              localStorage.setItem(
                "cart_id",
                JSON.stringify({
                  cart_id: val.data.allShoppingCarts.nodes[0].id,
                })
              );
              var _conditionfetch = {
                CartId: {
                  shoppingCartId: val.data.allShoppingCarts.nodes[0].id,
                  // isComboOffer:false
                },
              };

              fetch(`${API_URL}/graphql`, {
                method: "post",

                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  query: FetchSku,
                  variables: { ..._conditionfetch },
                }),
              })
                .then(status)
                .then(json)
                .then(async function (data) {
                  var _data = data?.data?.allShoppingCartItems?.nodes
                    ?.filter((val) => {
                      if (val.transSkuListByProductSku) return val;
                    })
                    .map((val) => {
                      return val.transSkuListByProductSku.generatedSku;
                    });
                  variables = { productList: _data };

                  makeRequest(variables);
                });
            } else {
              if (sessionStorage.getItem("updatedProduct")) {
                _user_id = { user_id: localStorage.getItem("user_id") };

                _products = {
                  products: [
                    JSON.parse(sessionStorage.getItem("updatedProduct")),
                  ],
                };
                _obj = { ..._user_id, ..._products };
                _user_id &&
                  _products.products &&
                  _products.products.length &&
                  _products.products[0] !== null &&
                  fetch(`${API_URL}/addtocart`, {
                    method: "post",

                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      ..._obj,
                    }),
                  })
                    .then(status)
                    .then(json)
                    .then(async function (data) {
                      if (
                        data &&
                        data.data &&
                        data.data.allShoppingCartItems &&
                        data.data.allShoppingCartItems.nodes &&
                        data.data.allShoppingCartItems.nodes.length > 0
                      ) {
                        var _data = data?.data?.allShoppingCartItems?.nodes
                          ?.filter((val) => {
                            if (val.transSkuListByProductSku) return val;
                          })
                          .map((val) => {
                            return val.transSkuListByProductSku.generatedSku;
                          });
                        variables = { productList: _data };

                        makeRequest(variables);
                      } else {
                        return val;
                      }
                    });
              } else {
                setNewUser(val);
                return NewUser;
              }

              // cartFilters, setCartFilters
            }

            // }
          }
        })
        .catch((err) => {
        });
    } else {
      // alert("Came as guest user")
      const comboSaved = localStorage.getItem("comboProducts");
      let comboProducts_ = []
      if(comboSaved){
        comboProducts_ = JSON.parse(localStorage.getItem("comboProducts"));
      }
      variables = { productList: [...skus,...comboProducts_] };
      // if(comboSaved && comboProductstoApi){
      //   const params = JSON.parse(comboProductstoApi);
      //   await fetch(`${API_URL}/fetch_cart_details`, {
      //     method: "post",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(params),
      //   })
      //     .then(response => response.json())
      //     .then(function (data) {
      //       const toCartFilter = data?.data?.filter((val) => val?.isComboOffer === true)
      //       setCartFilters({
      //         ...cartFilters,comboProducts:toCartFilter
      //       })
      //       makeRequest(variables);
      //     });
      // }else{
        makeRequest(variables);
      // }
      
    }
  };

  const handleAddToCartDidMount = () => {
    if (localStorage.getItem("cart_id") === null) {
      if (JSON.stringify(cartdetails).length > 0) {
        var products = localStorage.getItem("cartDetails")
          ? JSON.parse(localStorage.getItem("cartDetails")).products
          : "";
        const user_id = cartFilters.user_id;
        var addcart = { products, user_id };
        // alert("hgdhfdhg")
        if (
          JSON.parse(localStorage.getItem("cartDetails"))?.products?.filter(
            (val) => {
              if (Object.keys(val).length > 0) return val;
            }
          ).length > 0
        ) {
          user_id &&
            products &&
            products.length &&
            products[0] != null &&
            addtocart(addcart);
        }
        orderobj["userProfileId"] = user_id;
        sessionStorage.setItem("user_id", user_id);
        orderobj["userProfileId"] = localStorage.getItem("user_id");
        if (
          (window.location.pathname === "/account-allorders" ||
            window.location.pathname === "/account-addresses" ||
            window.location.pathname === "/account-shoppingcart" ||
            window.location.pathname === "/account-wishlist" ||
            window.location.pathname === "/account-profile") &&
          Object.values(orderobj).length > 0
        )
          allordermakeRequest(orderobj);
      }
    } else {
      var local_storage = JSON.parse(localStorage.getItem("cartDetails"));
      var _get_cart_id = JSON.parse(localStorage.getItem("cart_id")).cart_id;
      var _cart_id = { cart_id: _get_cart_id };
      var _user_id = { user_id: localStorage.getItem("user_id") };
      var local_storage_products = [];
      if (
        local_storage &&
        Object.entries(local_storage).length > 0 &&
        local_storage.constructor === Object
      ) {
        local_storage_products = JSON.parse(
          localStorage.getItem("cartDetails")
        ).products.map((val) => {
          return val;
        });
      }
      var _products_array = local_storage.products;
      var skuId = cartFilters.skuId;
      var products = [];
      var productszz = [];
      var obj = {};
      var cartId = "";
      var userId = "";
      var obj = { sku_id: "", qty: "", price: "" };
      obj["sku_id"] = skuId;
      obj["qty"] = cartFilters.qty;
      obj["price"] = cartFilters.price;
      productszz.push(obj);

      var products_sku_list = () => {
        if (local_storage_products.length > 0) {
          local_storage_products.push(obj);
          return local_storage_products;
        } else {
          products.push(obj);
          return products;
        }
      };

      var skuObj = {
        cart_id: cartId,
        user_id: userId,
        products: _products_array,
      };

      var session_storage = JSON.parse(
        sessionStorage.getItem("updatedProduct")
      );
      var _products = { products: [session_storage] };
      var _obj = { ..._user_id, ..._products, ..._cart_id };
      if (
        JSON.parse(localStorage.getItem("cartDetails"))?.products?.filter(
          (val) => {
            if (Object.keys(val).length > 0) return val;
          }
        ).length > 0
      ) {
        _user_id &&
          _products.products &&
          _products.products.length &&
          _products.products[0] != null &&
          addtocart(_obj);
      }

      // }
      // alert("2")

      localStorage.setItem("cartDetails", JSON.stringify(skuObj));

      // window.location.reload()
    }
  };
  useEffect(() => {
    setCartFilters(skus);
    // _qty()
    updateProductList();
    ordersuccessful();
    if (window.location.pathname === "/cart") {
      if (Boolean(localStorage.getItem("user_id"))) {
        // if(localStorage.getItem("cart_id") === null){
        if (Boolean(localStorage.getItem("cartDetails"))) {
          handleAddToCartDidMount();
        }

        // }
      }
    }
  }, []);

  const CartCtx = {
    cartFilters,
    loading,
    error,
    wishlist_count,
    data,
    setCartFilters,
    allorderdata,
    wishlistdata,
    allordersuccesful,
    noproducts,
    NewUser,
    loadingWishlist,
  };

  return (
    <CartContext.Provider
      value={{
        CartCtx,
        setwishlist_count,
        setCartFilters,
        setallorderdata,
        setwishlistdata,
        setNoproducts,
        setLoadingWishlist,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const CartProvider = withRouter(Provider);
