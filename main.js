/** TÍNH NGÀY THÁNG NĂM
* Đầu vào:
*      Nhập ngày 
*      Nhập tháng;
*      Nhập năm;
* Xử lý:
btnHomQua:
    Nếu day = 1 ,
        Nếu month = 5,7,10,12
            yesterday += 30;
            month = month - 1;
        Nếu month = 2,4,6,8,9,11
            yesterday += 31;
            month = month - 1;
        Nếu month = 3;
            Nếu năm nhuận, thì yesterday = 29, month = month - 1;
            Ngược lại, thì yesterday = 28, month = month - 1;
        Nếu month = 1;
            yesterday += 31;
            month = 12;
            year = year - 1;
    Ngược lại,
        Yesterday = day - 1;
btnNgayMai:
    Nếu day = 30 và month = 4, 6, 9, 11
        tomorrow += 1;
        month = month + 1;
    Nếu day = 31 và month = 2, 4, 6, 8, 9, 11
        yesterday += 31;
        month = month - 1;
    Nếu day = 29 và month = 2;
        Nếu năm nhuận, thì tomorrow = 1, month = month + 1;
        Ngược lại năm không nhuận, thì tomorrow = 1, month = month + 1;
    Nếu day = 31 và month = 12 thì
        tomorrow += 1;
        month = 1;
        year = year + 1;
    Ngược lại,
        Yesterday = day - 1;

* Đầu ra: In kết quả

*/


document.getElementById("btnHomQua").onclick = function () {
    // Đầu vào
    var day = document.getElementById("day").value * 1;
    var month = document.getElementById("month").value * 1;
    var year = document.getElementById("year").value * 1;
    var yesterday = "";
    // Xử lý


    if (day == 1) {
        if (month == 5 || month == 7 || month == 10 || month == 12) {
            yesterday += 30;
            month = month - 1;
        } else if (month == 2 || month == 4 || month == 6 || month == 8 || month == 9 || month == 11) {
            yesterday += 31;
            month = month - 1;
        } else if (month == 3) {
            if (((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0)) {
                yesterday += 29;
                month = month - 1;
            } else {
                yesterday += 28;
                month = month - 1;
            }
        } else if (month == 1) {
            yesterday += 31;
            month = 12;
            year = year - 1;
        }
    } else {
        yesterday = day - 1;
    }
    // ĐẦU RA
    var Yester = "👉";
    Yester += yesterday + "/" + month + "/" + year;
    document.getElementById("infoTinhNgayThangNam").innerHTML = Yester;
}

// if (day == 1 && (month == 5 || month == 7 || month == 10 || month == 12)) {
//     yesterday += 30;
//     month = month - 1;
//     year = year;
// } else if ((day == 1 && (month == 2 || month == 4 || month == 6 || month == 8 || month == 9 || month == 11))) {
//     yesterday += 31;
//     month = month - 1;
//     year = year;
// } else if (day == 1 && month == 3) {
//     if (((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0)) {
//         yesterday += 29;
//         month = month - 1;
//     } else {
//         yesterday += 28;
//         month = month - 1;
//         year = year;
//     }
// } else if (day == 1 && month == 1) {
//     yesterday += 31;
//     month = 12;
//     year = year - 1;
// } else {
//     yesterday = day - 1;
// }

// switch (day) {
//     case 1:
//         switch (month) {
//             case 5:
//             case 7:
//             case 10:
//             case 12:
//                 yesterday += 30;
//                 break;

//             case 1:
//             case 2:
//             case 4:
//             case 6:
//             case 8:
//             case 9:
//             case 11:
//                 yesterday += 31;
//                 break;

//             default:
//                 break;
//         }
//         break;

//     default:
//         yesterday = day - 1;
//         break;
// }


document.getElementById("btnNgayMai").onclick = function () {
    // Đầu vào
    var day = document.getElementById("day").value * 1;
    var month = document.getElementById("month").value * 1;
    var year = document.getElementById("year").value * 1;
    var tomorrow = "";
    // Xử lý

    if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
        tomorrow += 1;
        month = month + 1;
    } else if ((day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10))) {
        tomorrow += 1;
        month = month + 1;
    } else if (day == 29 && month == 2) {
        if (((year % 4 == 0) && (year % 100 !== 0)) || (year % 400 == 0)) {
            tomorrow += 1;
            month = month + 1;
        } else {
            tomorrow += 1;
            month = month + 1;
        }
    } else if (day == 31 && month == 12) {
        tomorrow += 1;
        month = 1;
        year = year + 1;
    } else {
        tomorrow = day + 1;
    }

    // ĐẦU RA
    var Tomor = "👉";
    Tomor += tomorrow + "/" + month + "/" + year;
    document.getElementById("infoTinhNgayThangNam").innerHTML = Tomor;
}

/**     BÀI 2: TÍNH NGÀY
 *  Đầu vào:
 *          Nhập tháng;
 *          Nhập năm
 *  Xử lý:
 *          If (month2 == 1 || month2 == 3|| month2 == 5 || month2 == 7 || month2 == 8 || month2 == 10 || month2 == 12)
 *              > 31 ngày
 *          If (month2 == 4 || month2 == 6 || month2 == 9 || month2 == 11)
 *              > 30 ngày
 *          if (month2 == 2 && year2 % 4 == 0 && year2 % 100 !==0) hoặc (month2 == 2 && year2 % 400 == 0)
 *              > 29 ngày
 *          else > 28 ngày.
 *  Đầu ra: Xuất dữ liệu
 */

document.getElementById("btnSapXep").onclick = function () {
    // console.log(2323);
    // ĐẦU VÀO
    var month2 = document.getElementById("month2").value * 1;
    var year2 = document.getElementById("year2").value * 1;
    var soNgay = 0;
    // XỬ LÝ
    if (month2 == 1 || month2 == 3 || month2 == 5 || month2 == 7 || month2 == 8 || month2 == 10 || month2 == 12) {
        soNgay = 31;
    } else if (month2 == 4 || month2 == 6 || month2 == 9 || month2 == 11) {
        soNgay = 30;
    } else if ((month2 == 2 && year2 % 4 == 0 && year2 % 100 != 0) || (month2 == 2 && year2 % 400 == 0)) {
        soNgay = 29;
    } else {
        soNgay = 28;
    }
    // ĐẦU RA
    var dayInMonth = "👉";
    dayInMonth += "Tháng " + month2 + " Năm " + year2 + " có " + soNgay + " ngày";
    document.getElementById("infoTinhNgay").innerHTML = dayInMonth;
}


/**     BÀI 3: ĐỌC SỐ
 * Đầu vào: Nhập 1 số có 3 chữ số
 * Xử lý:
 *      - Tách số hàng trăm, hàng chục, hàng đơn vị;
 *          + Hàng trăm: chia 100 lấy phần nguyên;
 *          + Hàng chục: chia 100 lấy phần dư, sau đó chia 10 lấy phần nguyên;
 *          + Hàng đơn vị: chia 100 lấy phần dư, sau đó chia 10 lấy phần dư;
 *      - Xét switch case cách đọc tại số hàng trăm từ 1 đến 9
 * *    - Xét switch case cách đọc tại số hàng chục từ 1 đến 9
 *      - Xét if khi số hàng chục = 0 và hàng đơn vị khác 0
 * (số hàng chục và hàng đơn vị bằng 0, không đọc nên không cần xét)
 * *    - Xét switch case cách đọc tại số hàng đơn vị từ 1 đến 9
 * Đầu ra:
 *  In ra cách đọc
 */
document.getElementById("btnReadNum").onclick = function () {
    // Đầu vào:
    var number = document.getElementById("number").value * 1;
    // var number = 222;
    // console.log("number");
    // Xử lý:
    var hangtram = Math.floor(number / 100);
    var hangchuc = Math.floor(number % 100 / 10);
    var hangdonvi = Math.floor((number % 100) % 10);
    var readNumber = "👉";
    // console.log(hangtram, hangchuc, hangdonvi);
    switch (hangtram) {
        case 1:
            readNumber += "một trăm";
            break;
        case 2:
            readNumber += "hai trăm";
            break;
        case 3:
            readNumber += "ba trăm";
            break;
        case 4:
            readNumber += "bốn trăm";
            break;
        case 5:
            readNumber += "năm trăm";
            break;
        case 6:
            readNumber += "sáu trăm";
            break;
        case 7:
            readNumber += "bảy trăm";
            break;
        case 8:
            readNumber += "tám trăm";
            break;
        case 9:
            readNumber += "chín trăm";
            break;
        default:
            // readNumber += "chín trăm";
            break;
    }

    switch (hangchuc) {
        case 1:
            readNumber += " mười ";
            break;
        case 2:
            readNumber += " hai mươi ";
            break;
        case 3:
            readNumber += " ba mươi ";
            break;
        case 4:
            readNumber += " bốn mươi ";
            break;
        case 5:
            readNumber += " năm mươi ";
            break;
        case 6:
            readNumber += " sáu mươi ";
            break;
        case 7:
            readNumber += " bảy mươi ";
            break;
        case 8:
            readNumber += " tám mươi ";
            break;
        case 9:
            readNumber += " chín mươi ";
            break;
        default:
            // readNumber += "chín mươi";
            break;
    }
    if (hangchuc == 0 && hangdonvi != 0) {
        readNumber += " lẻ ";
    }
    switch (hangdonvi) {
        case 1:
            readNumber += "một";
            break;
        case 2:
            readNumber += "hai";
            break;
        case 3:
            readNumber += "ba";
            break;
        case 4:
            readNumber += "bốn";
            break;
        case 5:
            readNumber += "năm";
            break;
        case 6:
            readNumber += "sáu";
            break;
        case 7:
            readNumber += "bảy";
            break;
        case 8:
            readNumber += "tám";
            break;
        case 9:
            readNumber += "chín";
            break;
        default:
            // readNumber += "chín";
            break;
    }
    // ĐẦU RA
    document.getElementById("infoReadNum").innerHTML = readNumber;
}



/** BÀI 4: Tìm sinh viên xa trường nhất trong 3 sinh viên
Đầu vào: tên và tọa độ của 3 sinh viên và tọa độ trường
Xử lý:
 - Đặt d(1,2,3) = căn ((tọa độ x trường - tọa độ x sinh viên (1,2,3) * (tọa độ x trường - tọa độ x sinh viên (1,2,3) + (tọa độ y trường - tọa độ y sinh viên (1,2,3)*(tọa độ y trường - tọa độ y sinh viên (1,2,3));
 - Đặt max là SV 1;
 - So sánh:
    + Nếu d2 > d1 và d2> d3       thì max là SV2;
    + Nếu d3 > d1 và d3> d2       thì max là SV3;
Đầu ra: Xuất dữ liệu SV xa trường nhất là max

*/
document.getElementById("btnSearch").onclick = function () {
    // ĐẦU VÀO
    var Name1 = document.getElementById("Name1").value;
    var toaDoX1 = document.getElementById("toaDoX1").value;
    var toaDoY1 = document.getElementById("toaDoY1").value;

    var Name2 = document.getElementById("Name2").value;
    var toaDoX2 = document.getElementById("toaDoX2").value;
    var toaDoY2 = document.getElementById("toaDoY2").value;

    var Name3 = document.getElementById("Name3").value;
    var toaDoX3 = document.getElementById("toaDoX3").value;
    var toaDoY3 = document.getElementById("toaDoY3").value;

    var toaDoX4 = document.getElementById("toaDoX4").value;
    var toaDoY4 = document.getElementById("toaDoY4").value;
    // XỬ LÝ
    var d1 = Math.sqrt(((toaDoX4 - toaDoX1) * (toaDoX4 - toaDoX1)) + ((toaDoY4 - toaDoY1) * (toaDoY4 - toaDoY1)));
    var d2 = Math.sqrt(((toaDoX4 - toaDoX2) * (toaDoX4 - toaDoX2)) + ((toaDoY4 - toaDoY2) * (toaDoY4 - toaDoY2)));
    var d3 = Math.sqrt(((toaDoX4 - toaDoX3) * (toaDoX4 - toaDoX3)) + ((toaDoY4 - toaDoY3) * (toaDoY4 - toaDoY3)));
    var max = Name1;
    if (d2 > d1 && d2 > d3) {
        max = Name2;
    } else if (d3 > d1 && d3 > d2) {
        max = Name3;
    }
    // ĐẦU RA
    var far = "👉";
    far += "Sinh viên xa trường nhất: " + max;
    document.getElementById("infoSearch").innerHTML = far;

}