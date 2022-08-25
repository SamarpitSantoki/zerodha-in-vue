<template>
  <div class="header">
    <div class="wrapper">
      <div class="header-right menu-closed">
        <a href="/dashboard" class="logo"
          ><img src="../../public/logo.svg"
        /></a>
        <!---->
        <a href="#" class="toggle-mobile-menu"
          ><div id="nav-icon4"><span></span> <span></span> <span></span></div
        ></a>
        <!---->
        <div class="app-nav hide-on-mobile">
          <a href="/dashboard" class=""><span>Dashboard</span></a>
          <a href="" class="dropdown-label portfolio-label"
            ><span class="portfolio-id">Portfolio</span></a
          >
          <!---->
          <a href="" class="dropdown-label reports-label router-link-active"
            ><span class="reports-id">Reports</span></a
          >
          <!---->
          <a href="" class="dropdown-label funds-label"
            ><span class="funds-id">Funds</span></a
          >
          <!---->
          <a href="/account" class=""><span>Account</span></a>
        </div>
        <div class="right-nav hide-on-mobile">
          <div class="user-nav perspective">
            <a href="" class="dropdown-label user-id"
              ><div id="avatar-17" class="profile-avatar">
                <!---->
                <img
                  src="https://s3.ap-south-1.amazonaws.com/zerodha-kite-blobs/avatars/4hQAAht2kIsZkhL9fWEsxMGBznOHvzdu.png"
                  height="25"
                  width="25"
                  class="avatar"
                  style="
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    text-align: center;
                    vertical-align: middle;
                    background: url('https://s3.ap-south-1.amazonaws.com/zerodha-kite-blobs/avatars/4hQAAht2kIsZkhL9fWEsxMGBznOHvzdu.png')
                      0% 0% / 25px 25px no-repeat content-box;
                  "
                />
              </div>
              <span id="userDetails" name="Vraj">PR2408</span></a
            >
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>