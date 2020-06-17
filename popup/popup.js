function read_result(item) {
  pc = document.querySelector("#popup-content textarea")
  ca = document.querySelector("#clickable")
  code = document.querySelector("code")

  for (i = 0; i < item.result.data.length; i++) {
    a = document.createElement("a")
    a.href = item.result.data[i]
    a.innerHTML = '<b>' + (i+1) + '</b>' + item.result.data[i]

    ca.appendChild(a)
    pc.value = pc.value + item.result.data[i] + '\n'
  }

  code.innerText = item.result.query
}

browser.storage.local.get("result").then(read_result);