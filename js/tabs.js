function show(clickId) {
			var showdiv = document.getElementById(clickId);
			var tabcontentdivs = document.getElementsByClassName('tabs-content')[0];
			var tabcontentpanels = tabcontentdivs.getElementsByClassName('content');
			
			for (var j=0;j<tabcontentpanels.length;j++) {
				if (tabcontentpanels[j].id == clickId) {				
				    tabcontentpanels[j].className=tabcontentpanels[j].className + ' active';
				} else {
					tabcontentpanels[j].className=tabcontentpanels[j].className.replace('active',"");
				}
			}
		}