let links = document.querySelectorAll(".rc .r > a")
let dork  = document.querySelector("input[maxlength]").value
let data  = []

for (link of links) {
    data.push(link.href)
}

browser.runtime.sendMessage({
    data: data, query: dork
});
