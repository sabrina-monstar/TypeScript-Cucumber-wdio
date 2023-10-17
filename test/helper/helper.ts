export const waitandclick= (ele:any, timeout:number) => {
ele.waitForDisplayed( {timeout} );
ele.click();
}