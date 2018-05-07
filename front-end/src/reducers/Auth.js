const defaultUserInfo = {
  name: 'Juan De Pablo',
  image: 'http://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png'
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}
