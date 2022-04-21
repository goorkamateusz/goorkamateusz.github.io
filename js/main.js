const svg_fork = '<svg class="svg fork" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>'
const svg_star = '<svg class="svg star" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>'

const username = "goorkamateusz"

class Repo {
    static is_stared(repo_data) { return repo_data.stargazers_count > 0 }

    constructor(data) { this.data = data }

    echo() {
        var $contener = $('<a class="repo" style="display:none"></a>')
        var infoToShow = ['name', 'description', 'language']
        $contener.append($(this.icon()))
        infoToShow.forEach(info => $contener.append(this.echo_module(info)))
        $contener.attr("href", this.data.html_url)
        return $contener
    }

    echo_module(info) { return $('<div id="' + info + '"></div>').text(this.data[info]) }

    icon() {
        if (this.data.fork == true) return svg_fork
        else if (this.data.stargazers_count > 1) return svg_star
        else return ""
    }

    static get_repo_list(data) {
        var repos_list = []
        data.forEach(repo_data => repos_list.push((new Repo(repo_data)).echo()))
        return repos_list
    }

    static compare(a, b) {
        var ans = Repo._compare(a.data.stargazers_count, b.data.stargazers_count)
        if (ans == 0) ans = Repo._compare(a.data.pushed_at, b.data.pushed_at)
        return ans
    }

    static _compare(a, b) { return (a < b) ? 1 : ((a > b) ? -1 : 0) }

    static print(repo) { return repo.echo() }

    static get_stared_repo_list(data) {
        var repos_list = []
        data.forEach(repo => { if (Repo.is_stared(repo)) repos_list.push((new Repo(repo))) })
        repos_list.sort(Repo.compare)
        repos_list = repos_list.map(Repo.print)
        repos_list.push(Repo.echo_see_more())
        return repos_list
    }

    static echo_see_more() {
        var $contener = $('<a class="repo" style="display:none" href="https://github.com/' + username + '?tab=repositories"></a>')
        $contener.append($('<div id="language">See all repositories...</div>'))
        return $contener
    }
}


class GithubUser {
    get_url() { return "https://api.github.com/users/" + username }

    init(data) { this.data = data }

    get(tag) { return this.data[tag] }

    print_repo(DOM_id) {
        $.get(
            this.get("repos_url"),
            function (data) {
                var $repos_cont = $(DOM_id)
                var repos_list = Repo.get_stared_repo_list(data)

                repos_list.forEach(function (repo, id) {
                    $repos_cont.append(repo)
                    repo.delay(150 * id).fadeIn(600)
                })
            })
    }

    load_profile() {
        $("#avatar-img").attr("src", this.get("avatar_url"))
        $("#my-name").text(this.get("name"))
        $("#my-login").text(this.get("login"))
        $("#bio").text(this.get("bio"))
        $("#email").text(this.get("email"));
        $("#location").text(this.get("location"))
        $("#company").text(this.get("company"))
    }

    print_profile() {
        this.load_profile()
        $("#profile").fadeIn(750)
    }
}

function startUp() {

    github = new GithubUser();

    $.get(
        github.get_url(),
        function (data) {
            github.init(data)
            github.print_profile()
            github.print_repo("#repos-list")
        }
    )

    $(".social").each(function (id) {
        $(this).css("display", "flex").hide().delay(150 * id).fadeIn(5000)
    })
}

function wait() {
    if (typeof $ != 'undefined') $(document).ready(() => startUp())
    else setTimeout(() => wait(), 50);
}

wait()
