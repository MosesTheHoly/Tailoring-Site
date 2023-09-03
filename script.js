function switchTab(value) {
    var clothesSwitch = document.getElementById("tabswitchClothes");
    var fabricSwitch = document.getElementById("tabswitchFabrics");
    if (value === 'ClothesTab') {
        if (clothesSwitch.classList.contains('selectedTab')) {
            return;
        }

        fabricSwitch.classList.remove('selectedTab');
        clothesSwitch.classList.add('selectedTab');

        document.getElementById("FabricsTab").hidden = true;
        document.getElementById("ClothesTab").hidden = false;

    }
    
    if (value === 'FabricsTab') {
        if (fabricSwitch.classList.contains('selectedTab')) {
            return;
        }
        
        clothesSwitch.classList.remove('selectedTab');
        fabricSwitch.classList.add('selectedTab');

        document.getElementById("ClothesTab").hidden = true;
        document.getElementById("FabricsTab").hidden = false;
    }
}