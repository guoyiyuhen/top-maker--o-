import Vue from 'vue';
Vue.prototype.$fileSuffix = (upFileName, listString) => {
  var index1 = upFileName.lastIndexOf(".");
  var index2 = upFileName.length;
  var suffix = upFileName.substring(index1 + 1, index2);
  return listString.includes(suffix);
}

Vue.prototype.$download=function (url, data = { url: "" }) {
  let form = document.createElement('form');
  form.display = "none";
  form.method = "post";
  form.action =  url;
  // data['access_token'] = {
  //     type: "hidden",
  //     value: this.$accessToken()
  // }
  for (var key in data) {
      let input = document.createElement('input');
      input.name = key;
      input.type = data[key].type || "hidden";
      input.value = data[key].value || "";
      form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}