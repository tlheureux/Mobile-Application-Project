	$("#btnSaveToLocalStorage").click(function () {
        SaveToLocalStorage();
    });
	
    function SaveToLocalStorage(){
        var Input1 = $("#input1").val();
        localStorage.setItem('LocalStorageKey', Input1);
        RetrieveFromLocalStorage();
    }

    function RetrieveFromLocalStorage() {
        var retrivedValue = 'None';
        var retrivedValue = localStorage.getItem('LocalStorageKey', retrivedValue);
        $("#divDataLocalStorage").text(retrivedValue);

    }
	