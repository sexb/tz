const urls = [
  'https://www.sexb.vip',
  'https://sexb.vip',
];
const email = 'website@sexb.vip';
const delaySeconds = 5;

class App extends React.Component {
  urlSuffix = '';
  state = {
    delaySeconds: delaySeconds
  };


  constructor() {
    super();
    const hash =window.location.hash.replace(/^#/, '' );
    this.urlSuffix = hash + window.location.search;
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.delayRedirect();
    }, 0);
  };

  delayRedirect = () => {
    if (this.state.delaySeconds > 0) {
      setTimeout(() => {
        this.setState({
          delaySeconds: this.state.delaySeconds - 1,
        }, () => {
          this.delayRedirect();
        });
      }, 1000);
    } else {
      this.redirect();
    }
  };


  redirect = () => {
    const url = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = this.paramedUrl(url);
  };

  paramedUrl = (url) => {
    return url + this.urlSuffix;
  };

  render() {
    return (
      <div style={{
        margin: '0 auto',
        textAlign: 'center',
        paddingTop: 'px',
        color: '#666',
        maxWidth: '500px',
        backgroundColor: '#fff',
        padding: '40px',
      }}>
        <div style={{
          fontSize: '25px',
          marginBottom: '20px',
        }}>
         
          <span style={{
            color: '#fff',
            background: '#fb5b73',
            padding: '2px 7px',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}>性吧</span>
        </div>
        <div style={{
          margin: '15px',
        }}>外围模特、楼凤兼职、桑拿浴场、全国性息、AV资源，应有尽有。</div>
        <div style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '10px',
          color: '#333',
        }}>最新地址</div>
        {urls.map((url) => {
          return (
            <div style={{
              margin: '5px 0',
            }}>
              <a href={this.paramedUrl(url)} style={{
                color: 'inherit',
                textDecoration: 'none'
              }}>{url}</a>
            </div>
          )
        })}
        <button className='Btn' onClick={this.redirect} style={{
          margin: '10px 0',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#fb5b73',
          border: 'none',
          padding: '7px 30px',
          borderRadius: '5px',
        }}>立即进入({this.state.delaySeconds})</button>
        <div style={{
          margin: '5px',
        }}>您可以收藏本页，方便下次浏览进入。</div>
        <div style={{
          margin: '5px'
        }}>发邮件到 {email} 随时获取最新地址。</div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
