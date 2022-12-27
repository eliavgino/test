import { useFormik } from "formik";

const Addto = (props) => {
  const formik = useFormik({
    initialValues: {
      bugdescription: "",
      resolved: "",
    },
  });

  return (
    <form onSubmit={(ev) => props.onsubmitadding(ev, formik.values)}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          bugdescription:
        </span>
        <input
          required
          autoFocus
          type="text"
          className="form-control"
          placeholder="bugdescription"
          aria-label="bugdescription"
          aria-describedby="basic-addon1"
          name="bugdescription"
          onChange={formik.handleChange}
        />
      </div>

      {/* <div className="input-group mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
          required
          autoFocus
          type="text"
          placeholder="resolved.."
          aria-describedby="basic-addon1"
          name="resolved"
          onChange={formik.handleChange}
        >
          <option selected disabled>
            resolved
          </option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div> */}

      <button
        type="submit"
        className="btn btn-outline-light mt-2 mb-2 me-4 ms-4"
      >
        add bug
      </button>
      <button
        type="reset"
        className="btn btn-outline-light mt-2 mb-2 me-4 ms-4"
      >
        reset
      </button>
    </form>
  );
};

export default Addto;
