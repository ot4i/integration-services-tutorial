$(document).foundation();

function show(clickId) {
			var showdiv = document.getElementById(clickId);	
			var tabUl = document.querySelector('.tabs');
			var tabs = tabUl.querySelector('.tab-title');			
			var tabcontentdivs = document.querySelector('.tabs-content');
			var tabcontentpanels = tabcontentdivs.querySelector('.content');
			
			for (var j=0;j<tabcontentpanels.length;j++) {
				if (tabcontentpanels[j].id == clickId) {				
				    tabcontentpanels[j].className=tabcontentpanels[j].className + ' active';
					tabs[j].className=tabs[j].className + ' active';
				} else {
					tabcontentpanels[j].className=tabcontentpanels[j].className.replace('active',"");
					tabs[j].className=tabs[j].className.replace('active','');
				}
			}
		}