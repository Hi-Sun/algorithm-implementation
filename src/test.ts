const init = [{id: '1', name: 'sunyaling'}];
const change: Array<{id: string, name: string}> = Object.assign([], init);
change.forEach(item => {
  if(item.id === '1') {
    item.name = 'liubaisong'
  }
})
console.log('change', change)