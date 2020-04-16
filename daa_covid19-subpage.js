var header = "<style type='text/css'>.wrapper {max-width: 90% !important;}.col-md-9.col-md-push-3 {left: 0;}.section-heading {color: #bf2e1a !important;font-weight:400;}.subpage-menu {display:none !important;}</style><div class='page-wrapper'></div>";
document.querySelector('body').innerHTML += header
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
