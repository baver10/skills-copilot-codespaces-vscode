function skillsMember() {
    // 1. Get the member ID from the URL
    var memberId = window.location.href.split("/").pop();
    // 2. Get the member's skills from the API
    $.get("/api/members/" + memberId, function (data) {
        // 3. Render the skills to the page
        data.skills.forEach(function (skill) {
            var skillElement = $("<span>").text(skill);
            $("#skills").append(skillElement);
        });
    });
}