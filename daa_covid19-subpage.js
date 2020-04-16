            document.querySelector('subpage-content').innerHTML += pageContent
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
