import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import {wait} from "@testing-library/dom";


describe("App", () => {
  
  

  it("Should show thumbnail as large picture when clicked", async () => {

    const app = render(<App/>);
    const largePhoto = app.getByTestId("largePhoto");
    const thumbnails = app.queryAllByTestId("thumbnailListItem");

    await wait(() => expect(thumbnails[3].src).not.toBe(largePhoto.src));

    fireEvent.click(thumbnails[3]);

    await wait(() => expect(thumbnails[3].src).toBe(largePhoto.src));
  });
  
  it("Should select thumbnail by changing class to 'selected' when clicked", async ()=>{
    
    const app = render(<App/>);
    const thumbnails = app.queryAllByTestId("thumbnailListItem");

    await wait(() => expect(thumbnails[3].className).not.toBe("thumbnail selected"));

    fireEvent.click(thumbnails[3]);

    await wait(() => expect(thumbnails[3].className).toBe("thumbnail selected"));
  });

});
      





