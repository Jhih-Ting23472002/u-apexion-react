import React from 'react';
import './MemberPersonEdit.css';
import MemberNavbar from '../../components/MemberNav';
import { useEffect, useState } from 'react';
import { reviseMem, findMem } from '../../data/UserWebApi';
import { useHistory } from 'react-router-dom';
import MemberPersonEditModal from './MemberPersonEditModal';

const MemberPersonEdit = () => {
  const history = useHistory();
  const [memInfo, setMemInfo] = useState({
    name: '',
    mobile: '',
    gender: '',
    birthday: '',
    country: '',
    passport: '',
  });
  const [fileSrc, setFileSrc] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [modalShow, setModalShow] = useState(false);
  //console.log(userPhoto);

  const [userAll, setUserAll] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3001/user/api/getuser');
      const data = await res.json();
      setUserAll(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    const newUserName = userAll?.find(v => v.sid === parseInt(userId));
    /*setFileSrc(
      `http://localhost:3001/img/${
        newUserName?.avatar ?? 'bdeb89f5-bcd8-4261-b721-3ec0ce4889db.jpg'
      }`
    );*/
    setFileSrc('http://localhost:3001/img/' + newUserName?.avatar);
  }, [userAll]);

  //先從localStorage拿id (你們的user_id)
  const sid = localStorage.getItem('user_id');
  // const mem_id = getMemId('mem_id');

  //這個步驟先把資料丟到欄位裡
  useEffect(() => {
    findMem(sid).then(obj => {
      setMemInfo(obj[0]);
    });
  }, []);

  const handleRevise = e => {
    e.preventDefault();
    const fd = new FormData(document.form1);
    reviseMem(fd).then(obj => {
      console.log(obj);
      if (obj.success) {
        setUserPhoto('http://localhost:3001/img' + '/' + obj.user_photo);
        // alert('修改成功');
        setModalShow(true);
      }
      // history.push('/member-person');
    });
  };
  const handleChange = e => {
    const newData = { ...memInfo, [e.target.name]: e.target.value };
    setMemInfo(newData);
  };
  const imgHandler = e => {
    const file = e.target.files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.onload = function () {
      setFileSrc(fileReader.result);
      console.log(fileSrc);
    };
    fileReader.readAsDataURL(file);
  };
  // const handleFormSubmit = e => {
  //   const fd = new FormData('formImage');
  //   fetch('', {
  //     method: 'POST',
  //     body: fd,
  //   }).then(res => res.json());
  // };

  return (
    <>
      <div className="member-container">
        <div className="member-shadow-container">
          <MemberNavbar />
          <div className="member-right-wrap">
            <div className="member-title-wrap">
              <div className="member-title">
                <h1>修改檔案</h1>
              </div>
            </div>
            <div className="person-form-container">
              <form
                className="person-form"
                onSubmit={handleRevise}
                name="form1"
              >
              <div className="member-input-container ">
                  <label htmlFor="name" className="member-label">
                    護照英文姓名
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="member-input"
                    name="passport"
                    value={memInfo?.passport_name ?? ''}
                    onChange={handleChange}
                  />
                </div>
                <div className="member-input-container ">
                  <label htmlFor="name" className="member-label">
                    姓名
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="member-input"
                    value={memInfo?.name ?? 'name'}
                    name="name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder=""
                    className="file-uploader"
                    value={sid}
                    name="sid"
                    onChange={handleChange}
                  />
                </div>
                <div className="member-input-container ">
                  <label htmlFor="mobile" className="member-label">
                    手機
                  </label>

                  <input
                    type="text"
                    placeholder=""
                    className="member-input"
                    value={memInfo?.mobile ?? ''}
                    name="mobile"
                    onChange={handleChange}
                  />
                </div>

                <div className="member-input-container">
                  <label htmlFor="birthday" className="member-label">
                    生日
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="member-input"
                    value={memInfo?.birthday ?? ''}
                    name="birthday"
                    onChange={handleChange}
                  />
                </div>
                <div className="member-input-container">
                  <label htmlFor="gender" className="member-label">
                    性別
                  </label>
                  <select
                    className="member-select"
                    value={memInfo?.gender ?? ''}
                    name="gender"
                    onChange={handleChange}
                  >
                    <option id="dropdown">請選擇</option>
                    <option>女性</option>
                    <option>男性</option>
                    <option>其他</option>
                  </select>
                </div>

                {/* <div className="member-input-container">
                  <label for="" className="member-label">
                    性別
                  </label>

                  <div class="member-gender-container">
                    <div class="member-gender">
                      <input type="radio" id="gender-female" name="gender" />
                      <label
                        for="gender-female"
                        className="member-gender-label"
                      >
                        女性
                      </label>
                    </div>
                    <div class="member-gender">
                      <input type="radio" id="gender-male" name="gender" />
                      <label for="gender-male" className="member-gender-label">
                        男性
                      </label>
                    </div>
                    <div className="member-gender">
                      <input type="radio" id="gender-other" name="gender" />
                      <label for="gender-other" className="member-gender-label">
                        其他
                      </label>
                    </div>
                  </div>
                </div> */}

                

                <div className="member-input-container">
                  <label htmlFor="country" className="member-label">
                    國籍
                  </label>
                  <select
                    className="member-select"
                    value={memInfo?.country ?? ''}
                    name="country"
                    onChange={handleChange}
                  >
                    <option id="dropdown">請選擇</option>
                    <option>台灣</option>
                    <option>日本</option>
                    <option>韓國</option>
                    <option>美國</option>
                  </select>
                </div>
                
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={imgHandler}
                  accept="image/*"
                  className="file-uploader"
                />
                <div className="member-btn-container person-btn-container">
                  <div className="member-return-btn-wrap">
                    <button
                      type="button"
                      className="member-circle-btn"
                      onClick={() => {
                        setMemInfo();
                      }}
                    >
                      取消更改
                    </button>
                  </div>
                  <div>
                    <button type="submit" className="member-circle-btn">
                      確認修改
                    </button>
                  </div>
                </div>
              </form>
              <div className="member-line-wrap">
                <div className="person-line"></div>
              </div>
              {/* <form style={{width:'500px'}}> */}
              <div
                className="person-avatar-container"
                // style={{ border: '1px solid red' }}
              >
                {/* <form
                  style={{ width: '100%' }}
                  name="formImage"
                  onSubmit={handleFormSubmit}
                > */}
                <img className="person-avatar-img" src={fileSrc} alt=""></img>
                <div
                  className="person-avatar-upload"
                  // style={{ border: '1px solid red' }}
                >
                  <div className="member-btn-container">
                    <div
                      className="member-circle-btn"
                      style={{ cursor: 'pointer' }}
                      onClick={e => {
                        document.querySelector('#avatar').click();
                      }}
                    >
                      選擇圖片
                    </div>
                  </div>
                </div>
                <div className="person-avatar-txt" style={{ marginTop: '5px' }}>
                  <p>檔案大小:最大1MB</p>
                  <p>檔案限制: .JPG, .PNG</p>
                </div>
                {/* </form> */}
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
      {/* <MemberNavbar fileSrc={fileSrc} setFileSrc={setFileSrc}/> */}
      <MemberPersonEditModal
        show={modalShow}
        onHide={() => {
          //setModalShow(false);
          history.push('/member-person');
        }}
      />
    </>
  );
};
export default MemberPersonEdit;
