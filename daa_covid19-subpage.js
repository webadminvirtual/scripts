<script src="https://unpkg.com/gsheets@2.0.0-beta.1/gsheets.polyfill.min.js"></script>
<style type="text/css">.wrapper {max-width: 90% !important;}
  .col-md-9.col-md-push-3 {left: 0;}
.section-heading {
  color: #bf2e1a !important;
  font-weight:400;
}
.subpage-menu {display:none !important;}
</style>
<div class="page-wrapper">
</div>
<script>

  setTimeout(function() {
    var accordianItem = document.getElementsByClassName('accordion-toggle')
    for (var i = 0; i < accordianItem.length; i++) {
      accordianItem[i].innerText = accordianItem[i].innerText.replace('COVID Resource Topics - ', '')
    }
  }, 1)

</script>
<script>

  gsheets.getWorksheet('1mrle0mhDNHT98JIcf_cyxuke45lgrCUMl8O4gp__qIQ', "Landing Page")
    .then(res => {
        res = res.data;
        var wrapper = document.querySelector(".page-wrapper");
        var pageContent = "<p class='mb-4'>" + res[0].Description + "</p>";
        pageContent += "<div class='row'>";
        for (var i = 1; i < res.length; i++){
        	var row = res[i]
          pageContent += "<div class='col-6 col-md-4'><h4><strong><a class='section-heading' href='" + row.Source + "'>" + row['Asset Name'] + "</a></strong></h4><p>" + row.Description + "</p></div>" 
        }
        pageContent += "</div></div>"
        wrapper.innerHTML += pageContent
    }, err => console.error(err));

</script>
