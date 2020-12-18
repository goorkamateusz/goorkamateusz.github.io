class Repo {
    constructor( data )
    { this.data = data }

    echo(){
        var $contener = $('<a class="repo" style="display:none"></a>')
        var infoToShow = [ 'name', 'description', 'language' ]
        infoToShow.forEach( info => $contener.append( this.echo_module(info) ) )
        $contener.attr("href", this.data.html_url)
        return $contener
    }

    echo_module( info )
    { return $('<div id="'+info+'"></div>').text(this.data[ info ]) }

    static get_repo_list( data ){
        var repos_list = []
        data.forEach( repo_data => repos_list.push( (new Repo( repo_data )).echo() ) )
        return repos_list
    }
}


class GithubUser {
    constructor( username )
    { this.username = username }

    get_url()
    { return "https://api.github.com/users/" + this.username }

    init( data )
    { this.data = data }

    get( tag ){ return this.data[ tag ] }

    print_repo( DOM_id ){
        $.get(
            this.get("repos_url"),
            function( data ){
                var $repos_cont = $( DOM_id )
                var repos_list = Repo.get_repo_list( data )

                repos_list.forEach( function( repo, id ){
                    $repos_cont.append( repo )
                    repo.delay(150*id).fadeIn(300)
                })
            })
    }

    load_profile(){
        $("#github-url").attr("href", this.get("html_url"))
        $("#avatar-img").attr("src", this.get("avatar_url"))
        $("#my-name").text(this.get("name"))
        $("#my-login").text(this.get("login"))
        $("#bio").text(this.get("bio"))
        $("#email").text(this.get("email"));
        $("#location").text(this.get("location"))
        $("#company").text(this.get("company"))
    }

    print_profile(){
        this.load_profile()
        $("#profile").fadeIn(750)
    }
}


function inc_stat(){
    if(document.location.href.split("//")[1].split(":")[0] === "127.0.0.1")
        console.log("Local")
    else
        $.get( "https://bit.ly/3p6iVZS" )
}


$(document).ready(function(){

    const username = "maatiug"
    github = new GithubUser( username );

    $.get(
        github.get_url(),
        function( data ){

            github.init( data )
            github.print_profile()
            github.print_repo("#repos-list")
        }
    )

    inc_stat()
})