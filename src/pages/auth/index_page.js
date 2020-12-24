import React from 'react'

function index_page() {
    return (
        <div style = {{display:'flex',height: "100vh", justifyContent:'center',alignItems:'center'}}>
            <div className = "" style={{margin: 10}}>
            <div class="row">
                <div class="col s12 ">
                <div class="card">
                    <div class="card-content white-text row">
                    <p><a href = "/auth/register"><i class="material-icons">add</i>Đăng kí</a></p>
                    </div>
                </div>
                </div>
            </div>
            </div >
            <div className = "" style={{margin: 10}}>
            <div class="row">
                <div class="col s12 ">
                <div class="card">
                    <div class="card-content white-text row">
                    <p><a href = "/auth/sign-in"><i class="material-icons">add</i>Đăng nhập</a></p>
                    </div>
                </div>
                </div>
            </div>
            </div >
        </div>
    )
}

export default index_page
