document.write(`<hr><br>
<b>Bài 2: Tính tiền điện</b>
<br>
<b>Input:</b> Số điện tiêu thụ hàng tháng
<br>
<b>Output:</b> Hiển thị số tiền phải đóng
<br>
Chi tiết giá điện theo bậc <br>
B1 ---> 0-50    ---> 1.678 <br>
B2 ---> 51-100  ---> 1.734 <br>
B3 ---> 101-200 ---> 2.014 <br>
B4 ---> 201-300 ---> 2.536 <br>
B5 ---> 301-400 ---> 2.834 <br>
B6 ---> >= 401  ---> 2.927 <br>
<br><br><b>Bài làm</b>`);

var kWh = 500;
var totalMoney;
document.write(`<br>Electric Meter: <b>${kWh}kWh</b>`);

if (kWh > 0) {
    if (kWh <= 50) {
        totalMoney = kWh * 1678;
    } else if ((kWh >= 51) & (kWh <= 100)) {
        totalMoney = 50 * 1678 + (kWh - 50) * 1734;
    } else if ((kWh >= 101) & (kWh <= 200)) {
        totalMoney = 50 * 1678 + 50 * 1734 + (kWh - 100) * 2014;
    } else if ((kWh >= 201) & (kWh <= 300)) {
        totalMoney = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kWh - 200) * 2536;
    } else if ((kWh >= 301) & (kWh <= 400)) {
        totalMoney =
            50 * 1678 +
            50 * 1734 +
            100 * 2014 +
            100 * 2536 +
            (kWh - 300) * 2834;
    } else {
        totalMoney =
            50 * 1678 +
            50 * 1734 +
            100 * 2014 +
            100 * 2536 +
            100 * 2834 +
            (kWh - 400) * 2927;
    }
    document.write(
        `<br>Tổng số tiền điện "thượng đế" phải đóng khi sử dụng <b>${kWh}kWh</b> là <b>${totalMoney} VND</b>`
    );
} else {
    document.write(`Số điện không hợp lệ (>0 số)`);
}
