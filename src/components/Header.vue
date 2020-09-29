<template>
    <div class="header">
        <header class="pt-4">
            <div class="container">
                <div class="row pl-4 pr-4">
                    <div class="col">
                        <img src="@/assets/logo.svg" alt="">
                    </div>
                    <div class="col-6">
                        <div class="input-group mb-3 m-0" id="pad">
                            <div class="input-group-prepend inicio">
                                <span class="input-group-text">Helsinki, Island</span>
                            </div>
                            <input type="text" class="form-control search" placeholder="Add guests">
                            <div class="input-group-prepend final">
                                <span class="input-group-text">
                                    <i class="material-icons text-danger">search</i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style>
#pad{
    width: 70% !important;
    float: right;
    border-radius: 16px;
    background: #FFFFFF;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    font-size: 14px;
}
#pad input{
    background: white;
    border:none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    border-left: 1px solid #F2F2F2;
    padding-top: 12px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
}

#pad input::placeholder{
    color: #bdbdbd !important;
    
}

#pad input:active {
    outline: none;
}

#pad span{
    background: transparent;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
}

.inicio{
}

.final{
    border-left: 1px solid #F2F2F2;
}

</style>