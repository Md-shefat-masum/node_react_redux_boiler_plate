import React from 'react'

function Details() {
    return (
        <div className='card list_card'>
            <div className="card-header ">
                <h2 className='heading'>Create</h2>
                <div className="btns d-flex gap-2 align-items-center">
                    <a href="#/user" className="btn rounded-pill btn-outline-secondary">
                        <i className="material-symbols-outlined fill">arrow_back</i>
                        Back
                    </a>
                </div>
            </div>
            <div className="card-body">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <form action="">
                                {[
                                    "first name",
                                    "last name",
                                    "email",
                                    "password",
                                    "address",
                                    "office",
                                    "phone number",
                                    "Zip code",
                                    "country",
                                ].map(i => {
                                    return (
                                        <div className="form-group mb-3">
                                            <div className="custom_form_el">
                                                <label htmlFor="">{i}</label>
                                                <div>:</div>
                                                <div>
                                                    Lorem ipsum dolor sit amet.
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">

            </div>
        </div>
    )
}

export default Details