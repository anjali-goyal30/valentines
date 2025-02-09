jQuery(document).ready(function ($) {
    $("#btnClaim").on("click", function () {
        window.location.href = $("#claimUrl").val();
    });

    $("#claimForm").on("submit", function (event) {
        event.preventDefault();
        var passKey = $("#exampleInputPassword1").val();
        if (passKey != undefined && passKey !== null && passKey === "ak472022") {
            window.location.href = $("#submitUrl").val();
        }
    });
});