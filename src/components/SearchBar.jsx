import React from 'react';

class SearchBar extends React.Component {
  render() {
    const containerStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light black background color with transparency
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      textAlign: 'center',
    };

    const inputContainerStyle = {
        position: 'relative',
        width: '550px', // Adjust the width in pixels to make the search bar longer
        marginBottom: '20px',
        opacity: '0.5',
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light black background color with higher opacity
      };      
      
      const inputStyle = {
        width: '100%',
        height: '50px',
        borderRadius: '25px',
        border: 'none',
        padding: '0 20px', // Adjust the padding to your preference
        fontSize: '20px',
        opacity: '0.8',
        backgroundColor: 'lightgrey',
        color: 'black',
      };
      

    const logoStyle = {
      fontFamily: 'PPStellar-Light',
      marginBottom: '20px',
      fontSize: '75px',
      fontWeight: 'bold',
      textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff7700, 0 0 70px #ff7700, 0 0 80px #ff7700, 0 0 100px #ff7700, 0 0 150px #ff7700',
    };

    return (
      <div style={containerStyle}>
        <div className='solarsurveyHeader' style={logoStyle}>
          S&nbsp;&nbsp;o&nbsp;&nbsp;l&nbsp;&nbsp;a&nbsp;&nbsp;r&nbsp;&nbsp;S&nbsp;&nbsp;u&nbsp;&nbsp;r&nbsp;&nbsp;v&nbsp;&nbsp;e&nbsp;&nbsp;y&nbsp;&nbsp;.ai
        </div>
        <div style={inputContainerStyle}>
          <input type="text" placeholder="Search" style={inputStyle} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
