function ajax({ method, url, onload, onerror }) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function (ev) {
    if (ev.target.readyState === 4) {
      if (ev.target.status === 200) {
        console.log("resolve");
        // reslove
        onload({
          status: ev.target.status,
          response: ev.target.response,
          statusText: ev.target.statusText,
        });
      } else {
        console.log("reject");
        // reject
        onerror({
          status: ev.target.status,
          statusText: ev.target.statusText,
        });
      }
    }
  };

  xhr.open(method, url);

  xhr.send();
}
