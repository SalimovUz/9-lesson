import React from 'react'
import Img1 from "../../public/assets/commentImg/img1.png"
import Img2 from "../../public/assets/commentImg/img2.png"
import Img3 from "../../public/assets/commentImg/img3.png"
import Img4 from "../../public/assets/commentImg/img4.png"
import Img5 from "../../public/assets/commentImg/img5.png"


const CommentUser = () => {
  return (
    <>
      <div class="table">
        <div class="table-form">
          <table>
            <tr>
              <th>Изображение</th>
              <th>Hазвание на узбекском</th>
              <th>Hазвание на русском</th>
              <th>Статус</th>
            </tr>
            <tr>
              <td>
                <img src={Img1} alt="" /> Баннер 1
              </td>
              <td>Баннер 1</td>
              <td><button>Активный</button></td>
              <span></span>
            </tr>
            <tr>
              <td>
                <img src={Img2} alt="" /> Баннер 1
              </td>
              <td>Баннер 1</td>
              <td><button>Активный</button></td>
              <span></span>
            </tr>
            <tr>
              <td>
                <img src={Img3} alt="" /> Баннер 1
              </td>
              <td>Баннер 1</td>
              <td><button>Активный</button></td>
              <span></span>
            </tr>
            <tr>
              <td>
                <img src={Img4} alt="" /> Баннер 1
              </td>
              <td>Баннер 1</td>
              <td><button>Активный</button></td>
              <span></span>
            </tr>
            <tr>
             <td>
                <img src={Img5} alt="" /> Баннер 1
              </td>
              <td>Баннер 1</td>
              <td><button>Активный</button></td>
              <span></span>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default CommentUser