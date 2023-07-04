var API_URL = "https://api.le-systeme-solaire.net/rest/bodies/"
var information = {"recently":"","status":"error","mass":0,"volume":0,"gravity":0}

function get_api_data(name){
    var request = new XMLHttpRequest()

    if(information.recently!=name){
        request.open('GET ',API_URL+name,true)
        request.onload = function() {
            var data=json.parse(this.response)
            
            if(request.status==200){
                information["recently"] = name
                information["status"] = "successful"
                information["mass"] = data.mass.massValue+""+data.mass.massExponent
                information["volume"] = data.vol.volValue+""+data.vol.volExponent
                information["gravity"] = data.gravity
            }
        }

        request.send()

    }
}

function set_api_data(name,mass,volume,gravity){
    if(information.status=="succesful"){
        planet_text.setAttribute('value',name)
        mass_text.setAttribute('value',"mass:"+information.mass+"kg")
        volume_text.setAttribute('value',"volume:"+information.volume+"km3")
        gravity_text.setAttribute('value',"gravity:"+information.gravity+"m/s2")
    }
}

AFRAME.registerComponent('do-something', {
    init: function () {
      var sceneEl = this.el
      var data = sceneEl.querySelector('data')
      var planet_text = sceneEl.querySelector('#planet_text')
      var mass_text = sceneEl.querySelector('#mass_text')
      var volume_text = sceneEl.querySelector('#volume_text')
      var gravity_text = sceneEl.querySelector('#gravity_text')
      var mercury = sceneEl.querySelector('#mercury')
      var venus = sceneEl.querySelector('#venus')
      var earth = sceneEl.querySelector('#earth')
      var mars = sceneEl.querySelector('#mars')
      var jupiter = sceneEl.querySelector('#jupiter')
      var saturn = sceneEl.querySelector('#saturn')
      var uranus = sceneEl.querySelector('#uranus')
      var neptune = sceneEl.querySelector('#neptune')

    }
})