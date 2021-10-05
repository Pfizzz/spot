$(document).ready(function() {
   console.log($("#edit_account"))
    $("#edit_user").on("click", function(e) {
    e.preventDefault()
    console.log("click")
    let oldUserObj = {
      username: $("#username").text(),
      lName: $("#lname").text(),
      email: $("#email").text(),
      id: $("#user.id").val()
    };
    console.log(oldUserObj)
    $("#username").html(`
      <input type="text" value="${oldUserObj.username}" id="new_username" class="form-control">
    `);
    $("#lname").html(`
    <input type="text" value="${oldUserObj.lName}" id="new_lname" class="form-control">
    `);
    $("#email").html(`
    <input type="text" value="${oldUserObj.email}" id="new_email" class="form-control" disabled>
    `);
    $("#save_btn_placeholder").html(
      // eslint-disable-next-line quotes
      `<button class="btn btn-dark" id="account_save">Save</button>
    <button class="btn btn-danger" id="cancel">Cancel</button>`
    );
  });
});