atob(filters)

filters = btoa(filters)
"eyJjb2xsZWN0aW9ucyI6WyJHb2xkIiwiU29saXRhaXJlIl0sInRoZW1lIjpbIkZhc2hpb24iLCJDaGljIl19"
encodeURI(filters)
"eyJjb2xsZWN0aW9ucyI6WyJHb2xkIiwiU29saXRhaXJlIl0sInRoZW1lIjpbIkZhc2hpb24iLCJDaGljIl19"


let datass = (JSON.stringify(mapped))
let a = window.btoa(datass)
let b = JSON.parse(window.atob(a));


// let { FilterOptionsCtx: { data, loading, error } } = React.useContext(FilterOptionsContext);
