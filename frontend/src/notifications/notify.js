import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const handleErrors = (error) => {
  if (error.response && error.response.data && error.response.data.errors) {
    const errors = error.response.data.errors;
    errors.forEach((error) => {
      MySwal.fire({
        icon: "error",
        title: "Validation Error!",
        text: error.msg,
      });
    });
  } else if (
    error.response &&
    error.response.data &&
    error.response.data.message
  ) {
    MySwal.fire({
      icon: "error",
      title: "Error!",
      text: error.response.data.message,
    });
  } else {
    MySwal.fire({
      icon: "error",
      title: "Error!",
      text: "An unexpected error occurred",
    });
  }
};

export const handleSuccess = (response) => {
  if (JSON.parse(response.config.data).listIds[0] === 96) {
    MySwal.fire({
      icon: "success",
      title: "Success!",
      text: "Yay !! You subscribed to our Newsletter",
    });
  } else if (JSON.parse(response.config.data).listIds[0] === 103 || JSON.parse(response.config.data).listIds[0] === 104) {
    MySwal.fire({
      icon: "success",
      title: "Success!",
      text: "Thank You for requesting our Brochure. We have mailed you the brochure to the registerd Email-id",
    });
  } else {
    MySwal.fire({
      icon: "success",
      title: "Success!",
      text: "Thank You for requesting our Self-paced video. We have mailed you the Self-paced video to the registerd Email-id",
    });
  }
};
