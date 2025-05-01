import React from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const StartPage = () => {
  return (
    <div>
   <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="text-center p-4">
        <h1 className="mb-4 fw-bold">Mëso. — Platforma Jote për të Mësuar më Shpejt</h1>
        <p className="lead mb-4">Krijo kuize, shkruaj shënime, organizohu me lehtësi.</p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/register" className="btn btn-success px-4">
            Regjistrohu për të filluar
          </Link>
          <Link to="/login" className="btn btn-outline-primary px-4">
            Kyçu
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default StartPage
