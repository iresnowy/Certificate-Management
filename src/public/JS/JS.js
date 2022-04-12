function toast({tittle='', msg='', type='success', ducation=3000}){
    const main = document.getElementById('toast');
    const delay= (ducation/1000).toFixed(2)
    const icons={
        success: 'fa-regular fa-circle-check',
        warning: 'fa-thin fa-circle-exclamation',
        error: 'fa-solid fa-triangle-exclamation'
    }
    if(main){
        const toast= document.createElement('div')
        const autoRemoveID=setTimeout(function(){
                main.removeChild(toast)
                    }, ducation + 1000)
                    // click to remove
                toast.onclick=function(e){
                    if(e.target.closest('.toast__close')){
                        main.removeChild(toast)
                        clearTimeout(autoRemoveID)
                    }
                }
        toast.classList.add('toast',`toast--${type}`)
                toast.style.animation = `slideInLeft ease 0.3s, fadeOut ease 1s ${delay}s forwards`;
                toast.innerHTML= `
                <div class="toast__icon">
                <i class="${icons[type]}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__tittle">${tittle}</h3>
                <p class="toast__msg">${msg}</p>
            </div>
            <div class="toast__close">
                <i class="fa-regular fa-circle-xmark"></i>
            </div>
            `;
            main.appendChild(toast)
    }

}
//show error toast
function showErrorToast(){
    toast({
    tittle:'Error',
    msg:'Không tìm thấy thông tin mã văn bằng này  -_-',
    type:'error',
    ducation: 2000
})
}
    // search
function kiemTraForm() {
   var code = document.getElementById("code").value
     console.log(code)
     $.ajax({
      url: '/getvaljson/' + code,
      type: 'get',
      dataType: 'json',
    }).done(function (ketqua) {
      console.log(ketqua);
      if(ketqua){
      document.getElementById('detail_name').innerText = ketqua.name;
      document.getElementById('detail_code').innerText = ketqua.code;
      document.getElementById('detail_title').innerText = ketqua.title;
      document.getElementById('detail_briday').innerText = ketqua.birday;
      document.getElementById('detail_nganh').innerText = ketqua.nganh;
      document.getElementById('detail_hinhthucdt').innerText = ketqua.hinhthucdt;
      document.getElementById('detail_trinhdodt').innerText = ketqua.trinhdodt;
      document.getElementById('detail_xeploai').innerText = ketqua.grayear;
      document.getElementById('detail_ngayph').innerText = ketqua.ngayph;
      document.getElementById('detail_author').innerText = ketqua.author;
      document.getElementById('detail_ngaycn').innerText = ketqua.ngaycn;
      document.getElementById('detail_updater').innerText = ketqua.updater;
      ///document.getElementById('detail_ngaytao').innerText = ketqua.ngaytao;
      document.getElementById('detail_status').innerText = ketqua.status;
      $('#exampleModal1').modal('show');}
      else{
        showErrorToast()
      }
    });
}
// open modal
document.addEventListener('DOMContentLoaded', function () {
    $('#exampleModal1').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    });
  });