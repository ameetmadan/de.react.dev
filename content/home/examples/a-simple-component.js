class HelloMessage extends React.Component {
  render() {
<<<<<<< HEAD
    return (
      <div>
        Hallo {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Thomas" />,
  document.getElementById('hello-example')
);
=======
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);
>>>>>>> 84ad3308338e2bb819f4f24fa8e9dfeeffaa970b
