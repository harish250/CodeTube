function changeTheme()
{
  var toggler = document.getElementById("theme-toggler");
  var body=document.body;
  console.log(body.classList);
  if(body.classList.contains('dark'))
  {
   body.classList.replace('dark','light')
    localStorage.setItem('theme','light');
  }
  else if(body.classList.contains('light'))
  {
    body.classList.replace('light','dark')
    localStorage.setItem('theme','dark');
  }


}
