function Avatar({src, width, height, children}) {

    return(<>
    <img src={src} alt="Avatar" width={width} height={height}></img>
    {children}
    </>)
}

export default Avatar;