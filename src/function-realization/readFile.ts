/**
 * @description 读取服务器上的文件
 * @param url 服务器地址
 */
const readAjaxFile = (url: string) => {
  const xhr = new XMLHttpRequest();
  // 监听AJAX请求状态
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
  // 打开请求
  xhr.open('GET', url, true);
  // 发送数据
  xhr.send(null);
}

/**
 * @description 读取本地文件
 * @param id 
 */
const readLocalFile = (id: string) => {
  const file = document.getElementById(id)?.files[0];
  const fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.onload = (data) => {
    console.log(data)
  }
}
