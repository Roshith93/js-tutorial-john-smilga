const defaultColumnWidths = [{
  width: 100,
  key: 'error_Level'
 },
 {
  width: 130,
  key: 'column'
 },
 {
  width: 300,
  key: 'field'
 },
 {
  width: 400,
  key: 'error_Message'
 },
 {
  width: 120,
  key: 'error_Count'
 },
]

getColumnWidth = (columnKey) => {
 let columnWidth = null

 const columnWidthsFiltered = defaultColumnWidths.filter((item) => {
  return item.key === columnKey
 })
 console.log(columnWidthsFiltered)
 if (columnWidthsFiltered.length > 0) {
  columnWidth = columnWidthsFiltered[0].width
 }

 return columnWidth //return width
}
getColumnWidth('error_Count')