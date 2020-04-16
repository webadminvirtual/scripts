        var pageContent = '<link href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" rel="stylesheet" /><style type="text/css">.wrapper{max-width:70% !important}.section-heading{color:#bf2e1a !important;font-weight:400}</style><div class="page-wrapper"><div class="row"><table class="display" id="covid" style="width:100%"><thead><tr><th>Category</th><th>Title</th><th>Description</th><th>Contributor</th><th>Submission Date</th></tr></thead><tbody id="covidBody"></tbody></table></div><hr class="mb-4" /><h4 class="section-heading"><strong>If you have a resource you&rsquo;d like to share with the community please complete our short form.</strong></h4> <iframe frameborder="0" height="1300" marginheight="0" marginwidth="0" src="https://docs.google.com/forms/d/e/1FAIpQLSfItTwp5ojhrGIDKVJl3X1vj104gAlUwwG2LN8bMM2AKnNoDw/viewform?embedded=true" style="margin-left:-30px;" width="600">Loading&amp;hellip;</iframe></div>'

document.querySelector('.subpage-content').innerHTML += pageContent
            var sheetIdentifier = (document.querySelector('.subpage-content')) ? document.querySelector('.subpage-content').firstElementChild.innerText.replace('COVID Resource Topics - ', '') : 'Digital Data, Trends & Research'
            gsheets.getWorksheet('1mrle0mhDNHT98JIcf_cyxuke45lgrCUMl8O4gp__qIQ', sheetIdentifier)
              .then(res => {
                    $('#covid').DataTable({
                  data: res.data,
            "columnDefs": [
              { 
                "data": "Asset Name","targets": 1, 
                "render": function(data, type, row, meta){
                return "<a class='section-heading' href='" + row['Link'] + "'>" + row['Asset Name'] + "</a>"
                }
               },
              { "data": "Description", "targets": 2 },
              { "data": "Subcategory", "targets": 0 },
              { "data": "Source", "targets": 3 },
              { "data": "Shared when?", "targets": 4 },
          
            ]
              } );
              }, err => console.error(err));
