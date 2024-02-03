import React from "react";
import Documentlist from "./documentlist";

import Photoslider from "./photoslider";

export default function content3() {
  return (
    <>
      <div class="content3">
        <Photoslider />

        <div id='documents' class="doc-list">
          <Documentlist />
        </div>
      </div>
    </>
  );
}
