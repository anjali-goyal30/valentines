jQuery(document).ready(function ($) {
    $("#btnClaim").on("click", function () {
        window.location.href = $("#claimUrl").val();
    });
});