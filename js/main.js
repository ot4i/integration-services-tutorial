$(document).foundation();

function show(clickId) {
			var showdiv = document.getElementById(clickId);			
			var tabUl = document.getElementsByClassName('tabs')[0];
			var tabs = tabUl.getElementsByClassName('tab-title');			
			var tabcontentdivs = document.getElementsByClassName('tabs-content')[0];
			var tabcontentpanels = tabcontentdivs.getElementsByClassName('content');
			
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