import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Enfj() {
  return (
    <div>
      <center>
        <div>
          <Zoom>
            <img src="/assetsCard/enfj/1.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/enfj/2.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/enfj/3.png" alt="test" width={500} />
          </Zoom>
          <Zoom>
            <img src="/assetsCard/enfj/4.png" alt="test" width={500} />
          </Zoom>
        </div>

        <br />
        <div>
          <a href="/assetsCard/enfj/5.png" download>
            บันทึกรูปภาพ
          </a>
        </div>
      </center>
    </div>
  );
}

export default Enfj;
