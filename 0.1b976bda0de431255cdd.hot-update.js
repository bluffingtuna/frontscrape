webpackHotUpdate(0,{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(7);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(258);\n\nvar _API = __webpack_require__(32);\n\nvar _API2 = _interopRequireDefault(_API);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// \"import Auth from '../../Auth';\"\n\nvar Navbar = function (_Component) {\n  _inherits(Navbar, _Component);\n\n  function Navbar() {\n    _classCallCheck(this, Navbar);\n\n    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this));\n\n    _this.state = {\n      email: ''\n    };\n    return _this;\n  }\n\n  _createClass(Navbar, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      _API2.default.getUser().then(function (res) {\n        _this2.setState({ email: res.data.email });\n      });\n    }\n  }, {\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n\n      if (this.state.email) {\n        return _react2.default.createElement(\n          \"div\",\n          { className: \"navbar container-fluid\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"modal fade\", id: \"accountModal\", tabIndex: \"-1\", role: \"dialog\", \"aria-labelledby\": \"exampleModalLabel\", \"aria-hidden\": \"true\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"modal-dialog\", role: \"document\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"modal-content\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"modal-header\" },\n                  _react2.default.createElement(\n                    \"h5\",\n                    { className: \"modal-title\", id: \"exampleModalLabel\" },\n                    \"Sign Up\"\n                  ),\n                  _react2.default.createElement(\n                    \"button\",\n                    { type: \"button\", className: \"close\", \"data-dismiss\": \"modal\", \"aria-label\": \"Close\" },\n                    _react2.default.createElement(\n                      \"span\",\n                      { \"aria-hidden\": \"true\" },\n                      \"\\xD7\"\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"modal-body\" },\n                  _react2.default.createElement(\n                    \"form\",\n                    { action: \"/delete/{this.state.email}\", method: \"post\" },\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"text-center\" },\n                      _react2.default.createElement(\n                        \"button\",\n                        { type: \"submit\", className: \"btn btn-warning\" },\n                        \"Delete Account\"\n                      )\n                    )\n                  ),\n                  _react2.default.createElement(\"br\", null)\n                )\n              )\n            )\n          ),\n          _react2.default.createElement(\n            \"nav\",\n            { className: \"navbar navbar-toggleable-md navbar-light bg-primary\" },\n            _react2.default.createElement(\n              \"button\",\n              { className: \"navbar-toggler navbar-toggler-right\", type: \"button\", \"data-toggle\": \"collapse\", \"data-target\": \"#navbarSupportedContent\", \"aria-controls\": \"navbarSupportedContent\", \"aria-expanded\": \"false\", \"aria-label\": \"Toggle navigation\" },\n              _react2.default.createElement(\"span\", { className: \"navbar-toggler-icon\" })\n            ),\n            _react2.default.createElement(\n              \"a\",\n              { className: \"navbar-brand\", href: \"/\" },\n              _react2.default.createElement(\"img\", { src: \"/images/redesigned_MI.jpg\", id: \"mainLogo\", className: \"d-inline-block align-top\", alt: \"MI\" }),\n              \"\\xA0Moose Industries\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"collapse navbar-collapse\", id: \"navbarSupportedContent\" },\n              _react2.default.createElement(\n                \"ul\",\n                { className: \"navbar-nav ml-auto\" },\n                _react2.default.createElement(\"br\", null),\n                _react2.default.createElement(\n                  \"li\",\n                  { className: \"nav-item\" },\n                  _react2.default.createElement(\n                    \"a\",\n                    { type: \"button\", className: \"nav-link btn bg-warning text-white\", title: \"Access Your Account\", \"data-toggle\": \"modal\", \"data-target\": \"#accountModal\" },\n                    this.state.email\n                  )\n                ),\n                \"\\xA0\",\n                _react2.default.createElement(\n                  \"li\",\n                  { className: \"nav-item\" },\n                  _react2.default.createElement(\n                    \"a\",\n                    { type: \"button\", className: \"nav-link btn bg-danger text-white\", title: \"Click to Log Out\", href: \"/logout\" },\n                    \"Log Out\"\n                  )\n                ),\n                \"\\xA0\"\n              )\n            )\n          )\n        );\n      } else {\n        return _react2.default.createElement(\n          \"div\",\n          { className: \"navbar container-fluid\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"modal fade\", id: \"signUpModal\", tabIndex: \"-1\", role: \"dialog\", \"aria-labelledby\": \"exampleModalLabel\", \"aria-hidden\": \"true\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"modal-dialog\", role: \"document\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"modal-content\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"modal-header\" },\n                  _react2.default.createElement(\n                    \"h5\",\n                    { className: \"modal-title\", id: \"exampleModalLabel\" },\n                    \"Sign Up\"\n                  ),\n                  _react2.default.createElement(\n                    \"button\",\n                    { type: \"button\", className: \"close\", \"data-dismiss\": \"modal\", \"aria-label\": \"Close\" },\n                    _react2.default.createElement(\n                      \"span\",\n                      { \"aria-hidden\": \"true\" },\n                      \"\\xD7\"\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"modal-body\" },\n                  _react2.default.createElement(\n                    \"form\",\n                    { action: \"/signup\", method: \"post\" },\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"form-group\" },\n                      _react2.default.createElement(\n                        \"label\",\n                        { htmlFor: \"exampleInputEmail1\" },\n                        \"Email address\"\n                      ),\n                      _react2.default.createElement(\"input\", { type: \"email\", name: \"email\", className: \"form-control\", id: \"exampleInputEmail1\", \"aria-describedby\": \"emailHelp\", placeholder: \"Please enter email address!\", required: true })\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"form-group\" },\n                      _react2.default.createElement(\n                        \"label\",\n                        { htmlFor: \"exampleInputPassword1\" },\n                        \"Password (we encrypt passwords to protect users)\"\n                      ),\n                      _react2.default.createElement(\"input\", { type: \"password\", name: \"password\", className: \"form-control\", id: \"exampleInputPassword1\", placeholder: \"Please enter password!\", required: true })\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"form-group\" },\n                      _react2.default.createElement(\n                        \"label\",\n                        { htmlFor: \"exampleInputPassword2\" },\n                        \"Confirm Password (we encrypt passwords to protect users)\"\n                      ),\n                      _react2.default.createElement(\"input\", { type: \"password\", className: \"form-control\", id: \"exampleInputPassword2\", placeholder: \"Please confirm password (not working yet)!\", required: true })\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"text-center\" },\n                      _react2.default.createElement(\n                        \"button\",\n                        { type: \"submit\", className: \"btn btn-primary\" },\n                        \"Submit\"\n                      )\n                    )\n                  ),\n                  _react2.default.createElement(\"br\", null)\n                )\n              )\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"modal fade\", id: \"logInModal\", tabIndex: \"-1\", role: \"dialog\", \"aria-labelledby\": \"exampleModalLabel\", \"aria-hidden\": \"true\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"modal-dialog\", role: \"document\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"modal-content\" },\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"modal-header\" },\n                  _react2.default.createElement(\n                    \"h5\",\n                    { className: \"modal-title\", id: \"exampleModalLabel\" },\n                    \"Log In\"\n                  ),\n                  _react2.default.createElement(\n                    \"button\",\n                    { type: \"button\", className: \"close\", \"data-dismiss\": \"modal\", \"aria-label\": \"Close\" },\n                    _react2.default.createElement(\n                      \"span\",\n                      { \"aria-hidden\": \"true\" },\n                      \"\\xD7\"\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { className: \"modal-body\" },\n                  _react2.default.createElement(\n                    \"form\",\n                    { action: \"/login\", method: \"post\" },\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"form-group\" },\n                      _react2.default.createElement(\n                        \"label\",\n                        { htmlFor: \"exampleInputEmail1\" },\n                        \"Email address\"\n                      ),\n                      _react2.default.createElement(\"input\", { type: \"email\", name: \"email\", className: \"form-control\", id: \"exampleInputEmail1\", \"aria-describedby\": \"emailHelp\", placeholder: \"Please enter email address!\", required: true })\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"form-group\" },\n                      _react2.default.createElement(\n                        \"label\",\n                        { htmlFor: \"exampleInputPassword1\" },\n                        \"Password\"\n                      ),\n                      _react2.default.createElement(\"input\", { type: \"password\", name: \"password\", className: \"form-control\", id: \"exampleInputPassword1\", placeholder: \"Please enter password!\", required: true })\n                    ),\n                    _react2.default.createElement(\n                      \"div\",\n                      { className: \"text-center\" },\n                      _react2.default.createElement(\n                        \"button\",\n                        { type: \"submit\", className: \"btn btn-primary\" },\n                        \"Submit\"\n                      )\n                    )\n                  ),\n                  _react2.default.createElement(\"br\", null)\n                )\n              )\n            )\n          ),\n          _react2.default.createElement(\n            \"nav\",\n            { className: \"navbar navbar-toggleable-md navbar-light bg-primary\" },\n            _react2.default.createElement(\n              \"button\",\n              { className: \"navbar-toggler navbar-toggler-right\", type: \"button\", \"data-toggle\": \"collapse\", \"data-target\": \"#navbarSupportedContent\", \"aria-controls\": \"navbarSupportedContent\", \"aria-expanded\": \"false\", \"aria-label\": \"Toggle navigation\" },\n              _react2.default.createElement(\"span\", { className: \"navbar-toggler-icon\" })\n            ),\n            _react2.default.createElement(\n              \"a\",\n              { className: \"navbar-brand\", href: \"/\" },\n              _react2.default.createElement(\"img\", { src: \"/images/redesigned_MI.jpg\", id: \"mainLogo\", className: \"d-inline-block align-top\", alt: \"MI\" }),\n              \"\\xA0Moose Industries\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"collapse navbar-collapse\", id: \"navbarSupportedContent\" },\n              _react2.default.createElement(\n                \"ul\",\n                { className: \"navbar-nav ml-auto\" },\n                _react2.default.createElement(\"br\", null),\n                _react2.default.createElement(\n                  \"li\",\n                  { className: \"nav-item\" },\n                  _react2.default.createElement(\n                    \"a\",\n                    { type: \"button\", className: \"nav-link btn bg-success text-white\", title: \"Click to Sign Up\", \"data-toggle\": \"modal\", \"data-target\": \"#signUpModal\" },\n                    \"Sign Up\"\n                  )\n                ),\n                \"\\xA0\",\n                _react2.default.createElement(\n                  \"li\",\n                  { className: \"nav-item\" },\n                  _react2.default.createElement(\n                    \"a\",\n                    { type: \"button\", className: \"nav-link btn bg-info text-white\", title: \"Click to Log In\", \"data-toggle\": \"modal\", \"data-target\": \"#logInModal\" },\n                    \"Log In\"\n                  )\n                ),\n                \"\\xA0\"\n              )\n            )\n          )\n        );\n      }\n    }\n  }]);\n\n  return Navbar;\n}(_react.Component);\n\nexports.default = Navbar;\n\n// <nav style={{ marginBottom: 0 }} className=\"navbar navbar-inverse\">\n//   <div className=\"container-fluid\">\n//     <div className=\"navbar-header\">\n//       <Link className=\"navbar-brand\" to=\"/\">Quotes App</Link>\n//     </div>\n//     <ul className=\"nav navbar-nav\">\n//       <li className={location.pathname === \"/\" && \"active\"}>\n//         <Link to=\"/\">Home</Link>\n//       </li>\n//       <li className={location.pathname === \"/favorites\" && \"active\"}>\n//         <Link to=\"/favorites\">Favorites</Link>\n//       </li>\n//     </ul>\n//   </div>\n// </nav>\n\n// <ul className=\"navbar-nav mr-auto\">\n//   <li className=\"nav-item\">\n//     <a className=\"nav-link\" href=\"/\">Home <span className=\"sr-only\">(current)</span></a>\n//   </li>\n// </ul>\n\n// Auth.login();\n\n// <li className=\"nav-item\">\n//   <a type=\"button\" className=\"nav-link btn bg-success text-white\" title=\"Click to View Account\" href=\"/account\">Account</a>\n// </li>\n// <li className=\"nav-item\">\n//   <a type=\"button\" className=\"nav-link btn bg-info text-white\" title=\"Click to Log Out\" href=\"/logout\">Log Out</a>\n// </li>\n\n// <li className=\"nav-item\">\n//   <Link type=\"button\" className=\"nav-link btn bg-warning text-white\" title=\"Account (temporary button here)\" to=\"/account\" onClick={() => this.props.setParent('')}>A (temp)</Link>\n// </li>\n\n// &nbsp;\n\n// onClick={() => this.props.setParent('')}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb21tb24vTmF2YmFyLmpzP2JmMmMiXSwibmFtZXMiOlsiTmF2YmFyIiwic3RhdGUiLCJlbWFpbCIsImdldFVzZXIiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBOztJQUVNQSxNOzs7QUFDRixvQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUZZO0FBS2I7Ozs7eUNBQ29CO0FBQUE7O0FBQ25CLG9CQUFJQyxPQUFKLEdBQWNDLElBQWQsQ0FBbUIsZUFBTztBQUN4QixlQUFLQyxRQUFMLENBQWMsRUFBQ0gsT0FBT0ksSUFBSUMsSUFBSixDQUFTTCxLQUFqQixFQUFkO0FBQ0QsT0FGRDtBQUdEOzs7Z0RBQzJCLENBRTNCOzs7NkJBQ1E7O0FBRVAsVUFBSSxLQUFLRCxLQUFMLENBQVdDLEtBQWYsRUFBc0I7QUFDcEIsZUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHdCQUFmO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmLEVBQTRCLElBQUcsY0FBL0IsRUFBOEMsVUFBUyxJQUF2RCxFQUE0RCxNQUFLLFFBQWpFLEVBQTBFLG1CQUFnQixtQkFBMUYsRUFBOEcsZUFBWSxNQUExSDtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWYsRUFBOEIsTUFBSyxVQUFuQztBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFJLFdBQVUsYUFBZCxFQUE0QixJQUFHLG1CQUEvQjtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsT0FBaEMsRUFBd0MsZ0JBQWEsT0FBckQsRUFBNkQsY0FBVyxPQUF4RTtBQUNFO0FBQUE7QUFBQSx3QkFBTSxlQUFZLE1BQWxCO0FBQUE7QUFBQTtBQURGO0FBRkYsaUJBREY7QUFPRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFNLFFBQU8sNEJBQWIsRUFBMEMsUUFBTyxNQUFqRDtBQUNFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsMEJBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQTtBQURGO0FBREYsbUJBREY7QUFNRTtBQU5GO0FBUEY7QUFERjtBQURGLFdBRkY7QUF1QkU7QUFBQTtBQUFBLGNBQUssV0FBVSxxREFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxXQUFVLHFDQUFsQixFQUF3RCxNQUFLLFFBQTdELEVBQXNFLGVBQVksVUFBbEYsRUFBNkYsZUFBWSx5QkFBekcsRUFBbUksaUJBQWMsd0JBQWpKLEVBQTBLLGlCQUFjLE9BQXhMLEVBQWdNLGNBQVcsbUJBQTNNO0FBQ0Usc0RBQU0sV0FBVSxxQkFBaEI7QUFERixhQURGO0FBSUU7QUFBQTtBQUFBLGdCQUFHLFdBQVUsY0FBYixFQUE0QixNQUFLLEdBQWpDO0FBQ0UscURBQUssS0FBSSwyQkFBVCxFQUFxQyxJQUFHLFVBQXhDLEVBQW1ELFdBQVUsMEJBQTdELEVBQXdGLEtBQUksSUFBNUYsR0FERjtBQUFBO0FBQUEsYUFKRjtBQVNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLDBCQUFmLEVBQTBDLElBQUcsd0JBQTdDO0FBQ0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsb0JBQWQ7QUFDRSx5REFERjtBQUdFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLFVBQWQ7QUFDRTtBQUFBO0FBQUEsc0JBQUcsTUFBSyxRQUFSLEVBQWlCLFdBQVUsb0NBQTNCLEVBQWdFLE9BQU0scUJBQXRFLEVBQTRGLGVBQVksT0FBeEcsRUFBZ0gsZUFBWSxlQUE1SDtBQUE2SSx5QkFBS0QsS0FBTCxDQUFXQztBQUF4SjtBQURGLGlCQUhGO0FBQUE7QUFRRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxVQUFkO0FBQ0U7QUFBQTtBQUFBLHNCQUFHLE1BQUssUUFBUixFQUFpQixXQUFVLG1DQUEzQixFQUErRCxPQUFNLGtCQUFyRSxFQUF3RixNQUFLLFNBQTdGO0FBQUE7QUFBQTtBQURGLGlCQVJGO0FBQUE7QUFBQTtBQURGO0FBVEY7QUF2QkYsU0FERjtBQW9ERCxPQXJERCxNQXFETztBQUNMLGVBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZixFQUE0QixJQUFHLGFBQS9CLEVBQTZDLFVBQVMsSUFBdEQsRUFBMkQsTUFBSyxRQUFoRSxFQUF5RSxtQkFBZ0IsbUJBQXpGLEVBQTZHLGVBQVksTUFBekg7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxjQUFmLEVBQThCLE1BQUssVUFBbkM7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxzQkFBSSxXQUFVLGFBQWQsRUFBNEIsSUFBRyxtQkFBL0I7QUFBQTtBQUFBLG1CQURGO0FBRUU7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLE9BQWhDLEVBQXdDLGdCQUFhLE9BQXJELEVBQTZELGNBQVcsT0FBeEU7QUFDRTtBQUFBO0FBQUEsd0JBQU0sZUFBWSxNQUFsQjtBQUFBO0FBQUE7QUFERjtBQUZGLGlCQURGO0FBT0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBTSxRQUFPLFNBQWIsRUFBdUIsUUFBTyxNQUE5QjtBQUNFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsMEJBQU8sU0FBUSxvQkFBZjtBQUFBO0FBQUEsdUJBREY7QUFFRSwrREFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixFQUFpQyxXQUFVLGNBQTNDLEVBQTBELElBQUcsb0JBQTdELEVBQWtGLG9CQUFpQixXQUFuRyxFQUErRyxhQUFZLDZCQUEzSCxFQUF5SixjQUF6SjtBQUZGLHFCQURGO0FBS0U7QUFBQTtBQUFBLHdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSwwQkFBTyxTQUFRLHVCQUFmO0FBQUE7QUFBQSx1QkFERjtBQUVFLCtEQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLFdBQVUsY0FBakQsRUFBZ0UsSUFBRyx1QkFBbkUsRUFBMkYsYUFBWSx3QkFBdkcsRUFBZ0ksY0FBaEk7QUFGRixxQkFMRjtBQVNFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsMEJBQU8sU0FBUSx1QkFBZjtBQUFBO0FBQUEsdUJBREY7QUFFRSwrREFBTyxNQUFLLFVBQVosRUFBdUIsV0FBVSxjQUFqQyxFQUFnRCxJQUFHLHVCQUFuRCxFQUEyRSxhQUFZLDRDQUF2RixFQUFvSSxjQUFwSTtBQUZGLHFCQVRGO0FBYUU7QUFBQTtBQUFBLHdCQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSwwQkFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxpQkFBaEM7QUFBQTtBQUFBO0FBREY7QUFiRixtQkFERjtBQWtCRTtBQWxCRjtBQVBGO0FBREY7QUFERixXQUZGO0FBbUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZixFQUE0QixJQUFHLFlBQS9CLEVBQTRDLFVBQVMsSUFBckQsRUFBMEQsTUFBSyxRQUEvRCxFQUF3RSxtQkFBZ0IsbUJBQXhGLEVBQTRHLGVBQVksTUFBeEg7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxjQUFmLEVBQThCLE1BQUssVUFBbkM7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxzQkFBSSxXQUFVLGFBQWQsRUFBNEIsSUFBRyxtQkFBL0I7QUFBQTtBQUFBLG1CQURGO0FBRUU7QUFBQTtBQUFBLHNCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLE9BQWhDLEVBQXdDLGdCQUFhLE9BQXJELEVBQTZELGNBQVcsT0FBeEU7QUFDRTtBQUFBO0FBQUEsd0JBQU0sZUFBWSxNQUFsQjtBQUFBO0FBQUE7QUFERjtBQUZGLGlCQURGO0FBT0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBTSxRQUFPLFFBQWIsRUFBc0IsUUFBTyxNQUE3QjtBQUNFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsMEJBQU8sU0FBUSxvQkFBZjtBQUFBO0FBQUEsdUJBREY7QUFFRSwrREFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixFQUFpQyxXQUFVLGNBQTNDLEVBQTBELElBQUcsb0JBQTdELEVBQWtGLG9CQUFpQixXQUFuRyxFQUErRyxhQUFZLDZCQUEzSCxFQUF5SixjQUF6SjtBQUZGLHFCQURGO0FBS0U7QUFBQTtBQUFBLHdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSwwQkFBTyxTQUFRLHVCQUFmO0FBQUE7QUFBQSx1QkFERjtBQUVFLCtEQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLFdBQVUsY0FBakQsRUFBZ0UsSUFBRyx1QkFBbkUsRUFBMkYsYUFBWSx3QkFBdkcsRUFBZ0ksY0FBaEk7QUFGRixxQkFMRjtBQVNFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsMEJBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQTtBQURGO0FBVEYsbUJBREY7QUFjRTtBQWRGO0FBUEY7QUFERjtBQURGLFdBbkNGO0FBZ0VFO0FBQUE7QUFBQSxjQUFLLFdBQVUscURBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQVEsV0FBVSxxQ0FBbEIsRUFBd0QsTUFBSyxRQUE3RCxFQUFzRSxlQUFZLFVBQWxGLEVBQTZGLGVBQVkseUJBQXpHLEVBQW1JLGlCQUFjLHdCQUFqSixFQUEwSyxpQkFBYyxPQUF4TCxFQUFnTSxjQUFXLG1CQUEzTTtBQUNFLHNEQUFNLFdBQVUscUJBQWhCO0FBREYsYUFERjtBQUlFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxHQUFqQztBQUNFLHFEQUFLLEtBQUksMkJBQVQsRUFBcUMsSUFBRyxVQUF4QyxFQUFtRCxXQUFVLDBCQUE3RCxFQUF3RixLQUFJLElBQTVGLEdBREY7QUFBQTtBQUFBLGFBSkY7QUFTRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSwwQkFBZixFQUEwQyxJQUFHLHdCQUE3QztBQUNFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLG9CQUFkO0FBQ0UseURBREY7QUFHRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxVQUFkO0FBQ0U7QUFBQTtBQUFBLHNCQUFHLE1BQUssUUFBUixFQUFpQixXQUFVLG9DQUEzQixFQUFnRSxPQUFNLGtCQUF0RSxFQUF5RixlQUFZLE9BQXJHLEVBQTZHLGVBQVksY0FBekg7QUFBQTtBQUFBO0FBREYsaUJBSEY7QUFBQTtBQVFFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLFVBQWQ7QUFDRTtBQUFBO0FBQUEsc0JBQUcsTUFBSyxRQUFSLEVBQWlCLFdBQVUsaUNBQTNCLEVBQTZELE9BQU0saUJBQW5FLEVBQXFGLGVBQVksT0FBakcsRUFBeUcsZUFBWSxhQUFySDtBQUFBO0FBQUE7QUFERixpQkFSRjtBQUFBO0FBQUE7QUFERjtBQVRGO0FBaEVGLFNBREY7QUE2RkQ7QUFDRjs7Ozs7O2tCQUdVRixNOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFVTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWpCIiwiZmlsZSI6IjE1MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi91dGlscy9BUEknO1xuLy8gXCJpbXBvcnQgQXV0aCBmcm9tICcuLi8uLi9BdXRoJztcIlxuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBBUEkuZ2V0VXNlcigpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IHJlcy5kYXRhLmVtYWlsfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcblxuICAgIH1cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgY29udGFpbmVyLWZsdWlkXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwiYWNjb3VudE1vZGFsXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPlNpZ24gVXA8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvZGVsZXRlL3t0aGlzLnN0YXRlLmVtYWlsfVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIj5EZWxldGUgQWNjb3VudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLXRvZ2dsZWFibGUtbWQgbmF2YmFyLWxpZ2h0IGJnLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3JlZGVzaWduZWRfTUkuanBnXCIgaWQ9XCJtYWluTG9nb1wiIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiIGFsdD1cIk1JXCIvPlxuICAgICAgICAgICAgICAgICZuYnNwO01vb3NlIEluZHVzdHJpZXNcbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPGJyLz5cblxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXYtbGluayBidG4gYmctd2FybmluZyB0ZXh0LXdoaXRlXCIgdGl0bGU9XCJBY2Nlc3MgWW91ciBBY2NvdW50XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2FjY291bnRNb2RhbFwiPnt0aGlzLnN0YXRlLmVtYWlsfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXYtbGluayBidG4gYmctZGFuZ2VyIHRleHQtd2hpdGVcIiB0aXRsZT1cIkNsaWNrIHRvIExvZyBPdXRcIiBocmVmPVwiL2xvZ291dFwiPkxvZyBPdXQ8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBjb250YWluZXItZmx1aWRcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJzaWduVXBNb2RhbFwiIHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5TaWduIFVwPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL3NpZ251cFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgcGxhY2Vob2xkZXI9XCJQbGVhc2UgZW50ZXIgZW1haWwgYWRkcmVzcyFcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPlBhc3N3b3JkICh3ZSBlbmNyeXB0IHBhc3N3b3JkcyB0byBwcm90ZWN0IHVzZXJzKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIiBwbGFjZWhvbGRlcj1cIlBsZWFzZSBlbnRlciBwYXNzd29yZCFcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMlwiPkNvbmZpcm0gUGFzc3dvcmQgKHdlIGVuY3J5cHQgcGFzc3dvcmRzIHRvIHByb3RlY3QgdXNlcnMpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMlwiIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGNvbmZpcm0gcGFzc3dvcmQgKG5vdCB3b3JraW5nIHlldCkhXCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJsb2dJbk1vZGFsXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkxvZyBJbjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9sb2dpblwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgcGxhY2Vob2xkZXI9XCJQbGVhc2UgZW50ZXIgZW1haWwgYWRkcmVzcyFcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiIHBsYWNlaG9sZGVyPVwiUGxlYXNlIGVudGVyIHBhc3N3b3JkIVwiIHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci10b2dnbGVhYmxlLW1kIG5hdmJhci1saWdodCBiZy1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9yZWRlc2lnbmVkX01JLmpwZ1wiIGlkPVwibWFpbkxvZ29cIiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIiBhbHQ9XCJNSVwiLz5cbiAgICAgICAgICAgICAgICAmbmJzcDtNb29zZSBJbmR1c3RyaWVzXG4gICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgYnRuIGJnLXN1Y2Nlc3MgdGV4dC13aGl0ZVwiIHRpdGxlPVwiQ2xpY2sgdG8gU2lnbiBVcFwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNzaWduVXBNb2RhbFwiPlNpZ24gVXA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgYnRuIGJnLWluZm8gdGV4dC13aGl0ZVwiIHRpdGxlPVwiQ2xpY2sgdG8gTG9nIEluXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI2xvZ0luTW9kYWxcIj5Mb2cgSW48L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuXG4gIC8vIDxuYXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItaW52ZXJzZVwiPlxuICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgLy8gICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgdG89XCIvXCI+UXVvdGVzIEFwcDwvTGluaz5cbiAgLy8gICAgIDwvZGl2PlxuICAvLyAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XG4gIC8vICAgICAgIDxsaSBjbGFzc05hbWU9e2xvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiAmJiBcImFjdGl2ZVwifT5cbiAgLy8gICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAvLyAgICAgICA8L2xpPlxuICAvLyAgICAgICA8bGkgY2xhc3NOYW1lPXtsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvZmF2b3JpdGVzXCIgJiYgXCJhY3RpdmVcIn0+XG4gIC8vICAgICAgICAgPExpbmsgdG89XCIvZmF2b3JpdGVzXCI+RmF2b3JpdGVzPC9MaW5rPlxuICAvLyAgICAgICA8L2xpPlxuICAvLyAgICAgPC91bD5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gPC9uYXY+XG5cbiAgICAgIC8vIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgIC8vICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAvLyAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL1wiPkhvbWUgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPihjdXJyZW50KTwvc3Bhbj48L2E+XG4gICAgICAvLyAgIDwvbGk+XG4gICAgICAvLyA8L3VsPlxuXG4gICAgICAvLyBBdXRoLmxvZ2luKCk7XG5cbiAgICAgICAgLy8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgIC8vICAgPGEgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGJ0biBiZy1zdWNjZXNzIHRleHQtd2hpdGVcIiB0aXRsZT1cIkNsaWNrIHRvIFZpZXcgQWNjb3VudFwiIGhyZWY9XCIvYWNjb3VudFwiPkFjY291bnQ8L2E+XG4gICAgICAgIC8vIDwvbGk+XG4gICAgICAgIC8vIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAvLyAgIDxhIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXYtbGluayBidG4gYmctaW5mbyB0ZXh0LXdoaXRlXCIgdGl0bGU9XCJDbGljayB0byBMb2cgT3V0XCIgaHJlZj1cIi9sb2dvdXRcIj5Mb2cgT3V0PC9hPlxuICAgICAgICAvLyA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAvLyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIC8vICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIGJ0biBiZy13YXJuaW5nIHRleHQtd2hpdGVcIiB0aXRsZT1cIkFjY291bnQgKHRlbXBvcmFyeSBidXR0b24gaGVyZSlcIiB0bz1cIi9hY2NvdW50XCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZXRQYXJlbnQoJycpfT5BICh0ZW1wKTwvTGluaz5cbiAgICAgICAgICAgICAgICAgIC8vIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgIC8vICZuYnNwO1xuXG4gLy8gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZXRQYXJlbnQoJycpfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})