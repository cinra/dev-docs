(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{214:function(r,e,a){"use strict";a.r(e);var s=a(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"勉強会-ansible編"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#勉強会-ansible編","aria-hidden":"true"}},[r._v("#")]),r._v(" 勉強会 - Ansible編")]),a("h2",{attrs:{id:"ansibleとは"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansibleとは","aria-hidden":"true"}},[r._v("#")]),r._v(" Ansibleとは")]),a("p",[r._v("環境構成ツールです。")]),a("p",[r._v("一例として、サーバーの設定をAnsibleで行う場合に、"),a("br"),r._v("\n主な環境としてはLAMPが有名ですが、"),a("br"),r._v("\n手動で行っていたこれら（OS、Apache、MySQL、PHP）のインストールから設定までを、"),a("br"),r._v("\n全て自動で行えるのがAnsibleです。")]),a("p",[r._v("Ansibleの仕組みとしては「A」にAnsible本体をインストールして、"),a("br"),r._v("\n「B」に対して実行する、といった処理を基本とします。")]),a("p",[r._v("例えば、「自身のPC」から、「AWS等のクラウドサービス」に設定を展開するといった事です。")]),a("p",[r._v("この時に、「B（実行対象）」にAnsibleを事前インストールしておく必要はありません。")]),a("hr"),a("h2",{attrs:{id:"ansibleの構成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansibleの構成","aria-hidden":"true"}},[r._v("#")]),r._v(" Ansibleの構成")]),a("p",[r._v("次に、Ansibleの構成についてです。")]),a("p",[r._v("Ansibleを実行するためには、最小構成でこれら4種類のファイルが必要になります。")]),a("p",[r._v("inventory："),a("strong",[r._v("接続先情報")]),a("br"),r._v("\nplaybook："),a("strong",[r._v("実行ファイル")]),a("br"),r._v("\nroles："),a("strong",[r._v("処理内容")]),a("br"),r._v("\nhost_vars、group_vars："),a("strong",[r._v("変数管理")])]),a("p",[r._v("以降、各ファイルについて詳しく記載します。")]),a("hr"),a("h2",{attrs:{id:"intventory（インベントリ）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intventory（インベントリ）","aria-hidden":"true"}},[r._v("#")]),r._v(" Intventory（インベントリ）")]),a("p",[r._v("まず、"),a("strong",[r._v("インベントリ")]),r._v("の説明です。")]),a("p",[a("strong",[r._v("インベントリファイル")]),r._v("は、"),a("strong",[r._v("接続先情報")]),r._v("を記録する、アドレス帳のような物です。")]),a("p",[r._v("ここに「実行対象のマシン」のIPアドレス（住所）を記載する事で、  Ansibleを実行した時に、指定されているマシンに対して、処理を実行します。")]),a("p",[r._v("コードは、以下の形を1セットとして記述します。"),a("br"),r._v("\nこれを正式名称「"),a("strong",[r._v("グループ変数")]),r._v("」と呼びます。")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("[server-name]\n192.168.X.X\n")])])]),a("hr"),a("h2",{attrs:{id:"varsとrole（バーズ、ロール）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#varsとrole（バーズ、ロール）","aria-hidden":"true"}},[r._v("#")]),r._v(" varsとrole（バーズ、ロール）")]),a("p",[r._v("次に、"),a("strong",[r._v("各バーズファイル")]),r._v("の説明です。")]),a("p",[a("strong",[r._v("バーズファイル")]),r._v("は、"),a("strong",[r._v("変数")]),r._v("を扱います。"),a("br"),r._v("\nロールは、バーズ側に定義された変数を組み込む事で、汎用性を持たせる事ができます")]),a("p",[r._v("バーズファイルは、以下の２種類があります。")]),a("p",[a("strong",[r._v("host_vars")]),a("br"),a("strong",[r._v("group_vars")])]),a("p",[r._v("どちらも変数を扱うファイルですが、それぞれの意味合いとしては、環境毎に設定内容を分割する目的で使います。")]),a("p",[r._v("例えば一般的な例として、基本の（ベースとなる）変数は"),a("strong",[r._v("host_vars")]),r._v("に記載しておき、プロジェクト毎に一部値を変更するといった場合は、"),a("strong",[r._v("group_vars")]),r._v("に管理しているファイルで基本の変数を上書きしていくといった仕組みです。")]),a("p",[r._v("具体的な例をあげると、"),a("strong",[r._v("group_vars")]),r._v("ディレクトリ以下に、プロジェクト名に対応した以下の様なフォルダを作成します。")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("group_vars/webserver1  \ngroup_vars/webserver2\n")])])]),a("p",[r._v("このように「環境=フォルダ単位」とする事で各フォルダ以下に、「"),a("strong",[r._v("任意の名前.yml")]),r._v("」を作成して、設定を分岐させるといった事が可能です。")]),a("p",[r._v("実際の記述はこのようになります。")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('---\nuser:\n  name: vagrant\n  group: vagrant\n  password: vagrant\n\nproject: hoge\nhostname: hoge.local\nproject_root: "/home/\n::: v-pre\n`{{ user[\'name\'] }}`\n:::"\ndocument_root: "\n::: v-pre\n`{{ project_root }}`\n:::/www/html"\nlog_root: /var/log\ncharset: utf8\n\nmysql:\n  dbname: fuga\n  host: localhost\n  root_password: foofoo\n')])])]),a("hr"),a("p",[r._v("続けて、"),a("strong",[r._v("ロール")]),r._v("の説明です。")]),a("p",[r._v("ロールには実際に走らせる処理（"),a("strong",[r._v("タスク")]),r._v("）を記載します。"),a("br"),r._v("\n以下のようなディレクトリ構成が１セットで、タスク処理は、ymlファイルに記述します。")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("roles/role-name/tasks/main.yml\n")])])]),a("p",[r._v("「"),a("strong",[r._v("role-name")]),r._v("」となっている箇所は、任意で命名します。基本的には「何を処理する物か」が分かりやすい名前で管理します。")]),a("p",[r._v("具体的な例では、「wordpressをインストールする物」であれば、「wordpress」や、"),a("br"),r._v("\n「wp」と命名するのがベターです。")]),a("p",[r._v("タスク処理のよくある使用例としては、パッケージ管理コマンドの「yum」を使い、パッケージをインストールをさせるか、"),a("br"),r._v("\nLinuxコマンドの、「cp（コピー）」や「mv（移動・リネーム）」といったシェルコマンドを直接実行させて、処理するといった形になります。")]),a("p",[r._v("実際の使用例を１つあげると、Ansibleは独自メソッドとして「"),a("strong",[r._v("get_url")]),r._v("」という処理を持っています。")]),a("p",[r._v("これは、「引数にURLを指定して、対象を取得する」という用途のメソッドです。（Linux系の、「"),a("strong",[r._v("curl")]),r._v("」や、「"),a("strong",[r._v("wget")]),r._v("」と同じような認識で問題ありません）")]),a("p",[r._v("以下は、「"),a("strong",[r._v("get_url")]),r._v("」を使用して「Wordpress本体をダウンロード」している例です。")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('- name: WordPressの最新版をダウンロード\n  get_url:\n    url: https://ja.wordpress.org/latest-ja.tar.gz\n    dest: "/home/vagrant/www/html/wp.tar.gz"\n')])])]),a("hr"),a("h2",{attrs:{id:"roleのtemplate機能（テンプレート）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roleのtemplate機能（テンプレート）","aria-hidden":"true"}},[r._v("#")]),r._v(" roleのtemplate機能（テンプレート）")]),a("p",[r._v("ロール（"),a("strong",[r._v("タスク")]),r._v("）について、もう少し詳しく見ていきます。\nロールは、"),a("strong",[r._v("タスク")]),r._v("の他に、"),a("strong",[r._v("テンプレート")]),r._v("という機能も持っています。")]),a("p",[r._v("テンプレート機能を使う場合は、以下のように管理名ディレクトリの下層に、"),a("strong",[r._v("templatesフォルダ")]),r._v("を作成して、"),a("strong",[r._v(".j2（jinja2）形式のファイル")]),r._v("を作成して記述します。")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("roles/管理名/templates/example.j2\n")])])]),a("p",[r._v("templateは共通設定をしつつ、一部を変数で処理するための物です。\n１つ前のロールの説明でWordpressをダウンロードする処理を書いていますが、インストールも自動で行いたい場合、設定ファイルの記述をなるべくプロジェクトに依存しない形で、使い回したいと思うはずです。")]),a("p",[r._v("実際に、"),a("strong",[r._v("wp-config.php")]),r._v("を設定した場合のコードを見てみます。")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //\n/** WordPress のためのデータベース名 */\ndefine('DB_NAME', '\n::: v-pre\n`{{ mysql[\"dbname\"] }}`\n:::');\n\n/** MySQL データベースのユーザー名 */\ndefine('DB_USER', '\n::: v-pre\n`{{ user[\"name\"] }}`\n:::');\n\n/** MySQL データベースのパスワード */\ndefine('DB_PASSWORD', '\n::: v-pre\n`{{ user[\"password\"] }}`\n:::');\n")])])]),a("p",[r._v("「中カッコで記載している箇所**")]),a("div",{pre:!0},[a("p",[a("code",[r._v("{{ ~~~ }}")]),r._v("\n::😗*」が変数になります。")]),a("p",[r._v("ここで記載している3種類は、「各バーズファイルの説明」の項目で記載していた、以下の部分を読み込んでいます。")]),a("div",{attrs:{class:"language- extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-text"}},[a("code",[r._v("user:\n  name: vagrant\n  password: vagrant\n")])])]),a("div",{attrs:{class:"language- extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-text"}},[a("code",[r._v("mysql:\n  dbname: fuga\n  root_password: foofoo\n")])])]),a("p",[r._v("この変数を、「各バーズファイルの説明」の項目に書いたように、環境別に管理しておき、これから説明するプレイブックで読み込む形で使用します。")]),a("p",[r._v("以上が、ロールの基本的な使い方です。")]),a("hr"),a("h2",{attrs:{id:"playbookとinventory（プレイブック、インベントリ）"}},[a("a",{attrs:{class:"header-anchor",href:"#playbookとinventory（プレイブック、インベントリ）","aria-hidden":"true"}},[r._v("#")]),r._v(" playbookとinventory（プレイブック、インベントリ）")]),a("p",[r._v("最後に、プレイブックの説明です。"),a("br"),r._v("\nプレイブックは、走らせるロールをを指定します。")]),a("p",[r._v("プレイブックは以下のように記述します。")]),a("div",{attrs:{class:"language- extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-text"}},[a("code",[r._v("---\n- name: プレイブック名\n  hosts: server-name\n  become: yes\n  vars_files:\n    - host_vars/example.yml\n  roles:\n    - ../roles/example-task1\n    - ../roles/example-task2\n    - ../roles/example-task3\n")])])]),a("p",[r._v("上から説明します。")]),a("h3",{attrs:{id:"name"}},[a("a",{attrs:{class:"header-anchor",href:"#name","aria-hidden":"true"}},[r._v("#")]),r._v(" name")]),a("p",[r._v("任意で付ける箇所です。"),a("br"),r._v("\n一般的にAnsibleで行う一連の処理が分かる名前ような名前を付けます。")]),a("p",[r._v("例えば、「LAMP環境を構築」などです。")]),a("h3",{attrs:{id:"hosts"}},[a("a",{attrs:{class:"header-anchor",href:"#hosts","aria-hidden":"true"}},[r._v("#")]),r._v(" hosts")]),a("p",[r._v("インベントリに記載されている項目を指定する事で、\nその宛先（マシン）に向けて、処理を実行します。")]),a("p",[r._v("上記プレイブックでは、先ほどインベントリに記述していたこの項目を読み込んでいます。")]),a("div",{attrs:{class:"language- extra-class"}},[a("pre",{attrs:{"v-pre":"",class:"language-text"}},[a("code",[r._v("[server-name]\n192.168.X.X\n")])])]),a("h3",{attrs:{id:"become"}},[a("a",{attrs:{class:"header-anchor",href:"#become","aria-hidden":"true"}},[r._v("#")]),r._v(" become")]),a("p",[r._v("Ansible版のsudoコマンドです。\n引数にyesを指定する事で、role処理の全てをスーパーユーザー権限で行います。")]),a("h3",{attrs:{id:"vars-files"}},[a("a",{attrs:{class:"header-anchor",href:"#vars-files","aria-hidden":"true"}},[r._v("#")]),r._v(" vars_files")]),a("p",[r._v("rolesに読ませる変数になります。\n環境毎に分けていれば、この部分を変えるだけで適応できるため、プレイブックの調整だけで複数台の処理にあてられます。")]),a("h3",{attrs:{id:"roles"}},[a("a",{attrs:{class:"header-anchor",href:"#roles","aria-hidden":"true"}},[r._v("#")]),r._v(" roles")]),a("p",[r._v("ここに記載した処理（role）が、実行されます。")]),a("p",[r._v("例えば、「wordpressのダウンロード」処理と、「データベースの構築」処理は密接ですが、分割しておけば、それぞれを別のプロジェクトでも細かく使い回せます。")]),a("p",[r._v("role処理は、スクラッチで作るのはコストがかかりますが、一度作ってしまえばどのようにも使いまわせる資産になるので、roleが溜まるほど様々な処理に対応できるようになり、コスト削減に繋がります。")])])])}],!1,null,null,null);e.default=t.exports}}]);