export const resolutions = [
  { res: '318x318', size: '375w' },
  { res: '372x372', size: '500w' },
  { res: '276x276', size: '1440w' },
  { res: '422x422', size: '600w' },
  { res: '247x247', size: '768w' },
  { res: '204x204', size: '1024w' },
  { res: '543x543', size: '2560w' },
]


// export const detailFilterGen = (type, value, table, clause = "equalTo") => {
//   if (type === 'productId') {
//     return {
//       [type]: {
//         [clause]: value
//       }
//     }
//   }
//   else {
    
//       let values = {};
//   // Object.keys(kv).map(k => {
//     values[type] = { [clause]: value } 
//   // });
// console.log(values)
//   return values;
//   }
// }

export const filterGenerator = (type, value, table, clause = "equalTo") => {
  if (table.length > 0) {
    return {
      [table]: {
        some: {
          [type]: {
            [clause]: value
          },
        }
      }

    }
  }
  else {
    return {
      [type]: {
        [clause]: value
      }
    }
  }
}

