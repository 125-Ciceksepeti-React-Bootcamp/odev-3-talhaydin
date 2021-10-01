import './App.css';
import React from 'react';
import Card from './Components/Cards/Card';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      copyPosts: [],
      searchInput: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          posts: data,
          copyPosts: data,
        });
      });
  }

  handleSearch = (event) => {
    const copyPosts = this.state.posts.filter((post) =>
      post.title.includes(event.target.value)
    );
    this.setState({
      searchInput: event.target.value,
      copyPosts,
    });
  };

  deletePost = (id) => {
    const posts = this.state.posts.filter((post) => post.id !== id);
    this.setState({
      posts,
    });
  };

  editPost = (changedData) => {
    const data = [...this.state.posts];
    const dataIndex = this.state.posts.findIndex(
      (item) => item.id === changedData.id
    );
    data[dataIndex] = changedData;
    this.setState({
      posts: data,
      copyPosts: data,
    });
    console.log(changedData);
  };

  render() {
    const copyPosts = this.state.posts.filter((post) =>
      post.title.includes(this.state.searchInput)
    );
    return (
      <div className="app">
        <Header
          searchWord={this.state.searchInput}
          handleSearch={this.handleSearch}
        />
        <div className="container">
          {copyPosts.slice(0, 21).map((post) => (
            <Card
              post={post}
              key={post.id}
              deletePost={this.deletePost}
              editPost={this.editPost}
            />
          ))}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
