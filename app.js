var sidebarItems = document.querySelectorAll('.sidebar-item')
var contentItems = document.querySelectorAll('.content-item')
var currentContentItem = document.querySelector('.content-item.show')


sidebarItems.forEach(function(sidebarItem, index) {
    sidebarItem.addEventListener('click', function(e) {
        var currentContentItem = document.querySelector('.content-item.show')
        currentContentItem.classList.remove('show')
        console.log(contentItems[index])
        contentItems[index].classList.add('show')
    })
})

var diemChuan = document.querySelector('.qlts-diemchuan');
var diemMonMot = document.querySelector('.qlts-mon1')
var diemMonHai = document.querySelector('.qlts-mon2')
var diemMonBa = document.querySelector('.qlts-mon3')
var khuVuc = document.querySelector('.qlts-khuvuc')
var doiTuong = document.querySelector('.qlts-doituong')
var btnKetQuaQLTS = document.querySelector('.btn-form.btn-qlts')
var tongDiem = document.querySelector('.qlts-tongdiem')
var ketQuaQLTS = document.querySelector('.qlts-ketqua')


btnKetQuaQLTS.onclick = function(e) {
    var _diemChuan = Number(diemChuan.value);
    var _diemMonMot = Number(diemMonMot.value);
    var _diemMonHai = Number(diemMonHai.value);
    var _diemMonBa = Number(diemMonBa.value);
    var _khuVuc = 0;
    var _doiTuong = 0;
    var _tongDiem = 0;

    switch (khuVuc.value) {
        case 'A':
            _khuVuc = 2;
            break;
        case 'B':
            _khuVuc = 1;
            break;
        case 'C':
            _khuVuc = 0.5;
            break;
        case 'X':
            _khuVuc = 0;
            break;
        default:
            alert('Bạn chưa nhập đủ hoặc nhập không hợp lệ!')
            return
    }

    switch (doiTuong.value) {
        case '0':
            _doiTuong = 0;
            break;
        case '1':
            _doiTuong = 2.5;
            break;
        case '2':
            _doiTuong = 1.5;
            break;
        case '3':
            _doiTuong = 1;
            break;
        default:
            alert('Bạn chưa nhập đủ hoặc nhập không hợp lệ!')
            return
    }

    if(_diemMonMot != NaN && _diemMonHai != NaN && _diemMonBa != NaN) {
        _tongDiem = _diemMonMot + _diemMonHai + _diemMonBa + _khuVuc + _doiTuong;

        tongDiem.innerHTML = _tongDiem
        if(_diemMonMot == 0 || _diemMonHai == 0 || _diemMonBa == 0 || _tongDiem < _diemChuan) {
            ketQuaQLTS.innerHTML = 'RỚT RỒI BẠN ƠI'
            return
        }

        ketQuaQLTS.innerHTML = 'ĐẬU RỒI BẠN ƠI'
        return
    } else {
        alert('Bạn nhập không hợp lệ')
        return
    }

}


// TÍNH TIỀN ĐIỆN
var btnTienDien = document.querySelector('.btn-form.btn-tiendien')
var sokw = document.querySelector('.tiendien-sokw')
var hoTen = document.querySelector('.tiendien-hoten')
var ghiTienDien = document.querySelector('.tiendien-tongtien')
var ghiHoten = document.querySelector('.tiendien-ghihoten')

btnTienDien.onclick = function(e) {
    var _sokw = Number(sokw.value)
    var tongTien = 0;
    if(sokw == NaN) {
        alert('Bạn nhập số kw không hợp lệ!')
        return
    }

    if(_sokw <= 50) {
        tongTien = 500 * _sokw;
    }
    else if(_sokw > 50 && _sokw <= 100) {
        tongTien = 500 * 50 + (_sokw - 50) * 650;
    }
    else if(_sokw > 100 && _sokw <= 200) {
        tongTien = 500 * 50 + 50 * 650 + (_sokw - 100) * 850;
    } else if(_sokw > 200 && _sokw <= 350) {
        tongTien = 500 * 50 + 50 * 650 + 100 * 850 + (_sokw - 200) * 1100;
    } else if(_sokw > 350) {
        tongTien = 500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (_sokw - 350) * 1300;
    }

    if(hoTen.value == '') {
        alert('Bạn chưa nhập đủ thông tin')
        return
    }

    ghiHoten.innerHTML = hoTen.value;
    ghiTienDien.innerHTML = tongTien + ' VND';
}

// TÍNH THUẾ THU NHẬP CÁ NHÂN
var hoTenThue = document.querySelector('.thue-hoten')
var thuNhapNam = document.querySelector('.thue-thunhapnam')
var nguoiPhuThuoc = document.querySelector('.thue-nguoiphuthuoc')
var btnThue = document.querySelector('.btn-form.btn-thue')
var thueGhiHoTen = document.querySelector('.thue-ghihoten')
var ghiTienThue = document.querySelector('.thue-tienthue')

btnThue.onclick = function(e) {
    var _thuNhapNam = Number(thuNhapNam.value)
    var _nguoiPhuThuoc = Number(nguoiPhuThuoc.value)

    if(hoTenThue == '' || _thuNhapNam == NaN || _nguoiPhuThuoc == NaN || thuNhapNam.value == '' || nguoiPhuThuoc.value == '') {
        alert('Bạn nhập chưa đủ hoặc nhập không hợp lệ')
        return
    }

    var thuNhapChiuThue = _thuNhapNam - 4000000 - _nguoiPhuThuoc * 1600000;
    var thueSuatCaNhan = 0;

    if(thuNhapChiuThue <= 60) 
        thueSuatCaNhan = thuNhapChiuThue * 0.05;
    else if(thuNhapChiuThue > 60 && thuNhapChiuThue <= 120)
        thueSuatCaNhan = thuNhapChiuThue * 0.1;
    else if(thuNhapChiuThue > 120 && thuNhapChiuThue <= 210)
        thueSuatCaNhan = thuNhapChiuThue * 0.15;
    else if(thuNhapChiuThue > 210 && thuNhapChiuThue <= 384)
        thueSuatCaNhan = thuNhapChiuThue * 0.2;
    else if(thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) 
        thueSuatCaNhan = thuNhapChiuThue * 0.25;
    else if(thuNhapChiuThue > 624 && thuNhapChiuThue <= 960)
        thueSuatCaNhan = thuNhapChiuThue * 0.3
    else
        thueSuatCaNhan = thuNhapChiuThue * 0.35;

    thueGhiHoTen.innerHTML = hoTenThue.value;
    ghiTienThue.innerHTML = thueSuatCaNhan + ' VND'

}

// TÍNH TIỀN CÁP
var loaiKH = document.querySelector('.cap-loaikh')
var maKH = document.querySelector('.cap-makh')
var kenhCaoCap = document.querySelector('.cap-kenhcaocap')
var btnCap = document.querySelector('.btn-cap')
var ketNoi = document.querySelector('.cap-ketnoi')
var ghiLoaiKh = document.querySelector('.cap-ghiloaikh')
var ghiTienCap = document.querySelector('.cap-tiencap')
var ghiMaKh = document.querySelector('.cap-ghimakh')

loaiKH.onchange = function(e) {
    if(loaiKH.value == "1") {
        ketNoi.disabled = true;
    } else if(loaiKH.value == "2") {
        ketNoi.disabled = false;
    } else {
        console.log('SĨ MINH ĐĂNG')
    }
}

console.log(loaiKH.value)

btnCap.onclick = function(e) {
    var _kenhCaoCap = Number(kenhCaoCap.value)
    var tienCap = 0;
    if(loaiKH.value == '' || maKH.value == '' || kenhCaoCap.value == '' || _kenhCaoCap == NaN) {
        alert('Bạn nhập chưa đủ thông tin hoặc nhập không hợp lệ')
        return
    }

    if(loaiKH.value == '1') {
        tienCap = 4.5 + 20.5 + 7.5 * _kenhCaoCap;
        ghiLoaiKh.innerHTML = 'Nhà dân'

    } else if(loaiKH.value == '2') {
        ghiLoaiKh.innerHTML = 'Doanh nghiệp'
        var phiDichVuCaNhan = 0;
        var soKetNoi = Number(ketNoi.value)
        if(soKetNoi == NaN) {
            alert('Bạn nhập không hợp lệ')
            return
        } else if(soKetNoi <= 10) {
            phiDichVuCaNhan = 7.5 * soKetNoi
        } else if(soKetNoi > 10) {
            phiDichVuCaNhan = 75 + (soKetNoi - 10) * 5;
        }

        tienCap = 15 + phiDichVuCaNhan + 50 * _kenhCaoCap;
        ghiMaKh.innerHTML = maKH.value;
        ghiTienCap.innerHTML = tienCap + '$'
    }


}