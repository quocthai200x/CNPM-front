import React from 'react'
import "./index.css"
function Detail() {
    return (
        <div class="col s10 offset-s1">
        {/* <!-- title --> */}
                <div class="row list-bill-row">
                    <div class="col s5">
                        <h4 id="ctkt">Thu tiền vệ sinh t10</h4>
                    </div>
                    <div class="col s2">
                        <span>Mã: KT-sdsdvsd45</span>
                    </div>
                    <div class="col s5">
                        <a class="waves-effect waves-light btn-small indigo accent-2"><i
                                class="material-icons left">edit</i>Sửa thông tin</a>
                        <a class="waves-effect waves-light btn-small red accent-2"><i
                                class="material-icons left">remove</i>Xóa khoản thu</a>

                    </div>
                </div>
        {/* <!-- bảng chi tiết --> */}
                <div class="row table-detail-row">
                    {/* <!-- Table --> */}
                    <div class="col s12">
                        <table class="highlight centered">
                            <thead class="card-panel indigo accent-2">
                                <tr class="white-text">
                                    <th class="col s3">Mã khoản thu</th>
                                    <th class="col s3">Tên khoản thu</th>
                                    <th class="col s3">Tổng số tiền nộp</th>
                                    <th class="col s3">Thời gian nộp</th>
                                </tr>
                            </thead>
                        </table>
                        <ul class="collapsible">
                            <li>
                                <div class="collapsible-header padding-off">
                                    <table class="highlight centered">
                                        <tbody>
                                            <tr>
                                                <td class="col s3">concak</td>
                                                <td class="col s3">conchym</td>
                                                <td class="col s3">concu</td>
                                                <td class="col s3">conbuom</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="collapsible-body">
                                    <span>Lorem ipsum dolor sit amet.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
        {/* <!-- dashboard chi tiết --> */}
                <div class="row dashboard-detail-row">
                    <div class="col s6">

                        <ul class="dashboard-ul">
                            <li>
                                <span>&bull; Tổng tiền quỹ đã thu: </span><span>10.000.000</span>
                            </li>
                            <li>
                                <span>&bull; Tổng các khoản thu trong năm: </span><span>27</span>
                            </li>
                            <li>
                                <span>&bull; Tổng các khoản thu trong tháng 10 </span><span>8</span>
                            </li>
                            <li>
                                <span>&bull; Số khoản thu đã hoàn thành: </span><span>1</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col s4"></div>
                </div>
        {/* <!-- bảng các hộ --> */}
                <div class="row list-house-row">
                    <div class="col s5">
                        <h4 id="dsch">Danh sách các hộ</h4>
                    </div>
                    {/* <!-- nút tab khoản thu --> */}
                    <div class="col s4">
                        <ul class="tabs">
                            <li class="tab col s6"><a href="#test3" class="active indigo-text text-accent-3">Chưa nộp</a></li>
                            <li class="tab col s6"><a class="indigo-text text-accent-3" href="#test4">Đã nộp</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- input tìm khoản thu --> */}
                    <div class="col s3">
                        <input type="text" placeholder="Tìm khoản thu..." />
                    </div>
                    {/* <!-- tab chờ xử lý --> */}
                    <div id="test3" class="col s12">

                        <table class="table-kt highlight centered">
                            <thead class="card-panel indigo accent-2">
                                <tr class="white-text">
                                    <th>Mã hộ</th>
                                    <th>Tên chủ hộ</th>
                                    <th>Địa chỉ</th>
                                    <th>Tổng số tiền nộp</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>H-sdfwcd654</td>
                                    <td>Phan Đức Trọng</td>
                                    <td>P221</td>
                                    <td>
                                        <input type="text" value="100.000"class="center-align" />
                                    </td>
                                    <td><a class="waves-effect waves-light btn indigo accent-2">Đánh dấu nộp</a></td>
                                </tr>
                                <tr>
                                    <td>H-sdfwcd654</td>
                                    <td>Phan Đức Trọng</td>
                                    <td>P221</td>
                                    <td>
                                        <input type="text" value="100.000" class="center-align" />
                                    </td>
                                    <td><a class="waves-effect waves-light btn indigo accent-2">Đánh dấu nộp</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- tab đã xử lý --> */}
                    <div id="test4" class="col s12">
                        <table class="table-kt highlight centered">
                            <thead class="card-panel indigo accent-2">
                                <tr class="white-text">
                                    <th>Mã hộ</th>
                                    <th>Tên chủ hộ</th>
                                    <th>Địa chỉ</th>
                                    <th>Tổng số tiền nộp</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>H-sdfwcd654</td>
                                    <td>Phan Đức Trọng</td>
                                    <td>P221</td>
                                    <td>
                                        100.000
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Detail
