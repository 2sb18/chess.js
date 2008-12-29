Chess.BLACK = 'b';
Chess.WHITE = 'w';

Chess.PAWN = 'p';
Chess.KNIGHT = 'n';
Chess.BISHOP = 'b';
Chess.ROOK = 'r';
Chess.QUEEN = 'q';
Chess.KING = 'k';

Chess.PAWN_OFFSETS = {
  b: [16, 32, 17, 15],
  w: [-16, -32, -17, -15],
};

Chess.PIECE_OFFSETS = {
  n: [-18, -33, -31, -14,  18, 33, 31,  14], 
  b: [-17, -15,  17,  15], 
  r: [-16,   1,  16,  -1], 
  q: [-17, -16, -15,   1,  17, 16, 15,  -1], 
  k: [-17, -16, -15,   1,  17, 16, 15,  -1],
}

Chess.ATTACKS = [
  20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20, 0,
   0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
   0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
   0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
   0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
  24,24,24,24,24,24,56,  0, 56,24,24,24,24,24,24, 0,
   0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
   0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
   0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
   0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
   0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
  20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20
];

Chess.RAYS = [
   17,  0,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0,  0, 15, 0,
    0, 17,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0, 15,  0, 0,
    0,  0, 17,  0,  0,  0,  0, 16,  0,  0,  0,  0, 15,  0,  0, 0,
    0,  0,  0, 17,  0,  0,  0, 16,  0,  0,  0, 15,  0,  0,  0, 0,
    0,  0,  0,  0, 17,  0,  0, 16,  0,  0, 15,  0,  0,  0,  0, 0,
    0,  0,  0,  0,  0, 17,  0, 16,  0, 15,  0,  0,  0,  0,  0, 0,
    0,  0,  0,  0,  0,  0, 17, 16, 15,  0,  0,  0,  0,  0,  0, 0,
    1,  1,  1,  1,  1,  1,  1,  0, -1, -1,  -1,-1, -1, -1, -1, 0,
    0,  0,  0,  0,  0,  0,-15,-16,-17,  0,  0,  0,  0,  0,  0, 0,
    0,  0,  0,  0,  0,-15,  0,-16,  0,-17,  0,  0,  0,  0,  0, 0,
    0,  0,  0,  0,-15,  0,  0,-16,  0,  0,-17,  0,  0,  0,  0, 0,
    0,  0,  0,-15,  0,  0,  0,-16,  0,  0,  0,-17,  0,  0,  0, 0,
    0,  0,-15,  0,  0,  0,  0,-16,  0,  0,  0,  0,-17,  0,  0, 0,
    0,-15,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,-17,  0, 0,
  -15,  0,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,  0,-17
];

Chess.SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 }

Chess.FLAGS = {
  NORMAL: 'n',
  CAPTURE: 'c',
  BIG_PAWN: 'b',
  EP_CAPTURE: 'e',
  PROMOTION: 'p',
  KSIDE_CASTLE: 'k',
  QSIDE_CASTLE: 'q'
};

Chess.RANK_1 = 7;
Chess.RANK_2 = 6;
Chess.RANK_3 = 5;
Chess.RANK_4 = 4;
Chess.RANK_5 = 3;
Chess.RANK_6 = 2;
Chess.RANK_7 = 1;
Chess.RANK_8 = 0;

Chess.SQUARES = {
  A8:   0, B8:   1, C8:   2, D8:   3, E8:   4, F8:   5, G8:   6, H8:   7,
  A7:  16, B7:  17, C7:  18, D7:  19, E7:  20, F7:  21, G7:  22, H7:  23,
  A6:  32, B6:  33, C6:  34, D6:  35, E6:  36, F6:  37, G6:  38, H6:  39,
  A5:  48, B5:  49, C5:  50, D5:  51, E5:  52, F5:  53, G5:  54, H5:  55,
  A4:  64, B4:  65, C4:  66, D4:  67, E4:  68, F4:  69, G4:  70, H4:  71,
  A3:  80, B3:  81, C3:  82, D3:  83, E3:  84, F3:  85, G3:  86, H3:  87,
  A2:  96, B2:  97, C2:  98, D2:  99, E2: 100, F2: 101, G2: 102, H2: 103,
  A1: 112, B1: 113, C1: 114, D1: 115, E1: 116, F1: 117, G1: 118, H1: 119
};

Chess.ROOKS = {
  w: [
     {square: Chess.SQUARES.A1, flag: Chess.FLAGS.QSIDE_CASTLE},
     {square: Chess.SQUARES.H1, flag: Chess.FLAGS.KSIDE_CASTLE}],
  b: [
     {square: Chess.SQUARES.A8, flag: Chess.FLAGS.QSIDE_CASTLE},
     {square: Chess.SQUARES.H8, flag: Chess.FLAGS.KSIDE_CASTLE}],
};

function Chess(fen) {
  if (typeof(fen) == 'undefined') {
    fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  } 
  this.load(fen);
}

Chess.prototype.clear = function() {
  this.board = new Array(128);
  this.kings = {w: -1, b: -1};
  this.turn = '';
  this.castling = {w: '', b: ''};
  this.ep_square = -1;
  this.half_moves = 0;
  this.move_number = 0;
  this.history = [];
}

Chess.prototype.load = function(fen) {
  var tokens = fen.split(' ');
  var position = tokens[0];
  var square = 0;

  this.clear();

  for (i = 0; i < position.length; i++) {
    piece = position.charAt(i);

    if (piece == '/') {
      square += 8;
    } else if (is_digit(piece)) {
      square += parseInt(piece, 10); 
    } else {
      color = (piece < 'a') ? Chess.WHITE : Chess.BLACK;
      piece = piece.toLowerCase();
      this.board[square] = {type: piece, color: color}; 

      if (piece == Chess.KING) {
        this.kings[color] = square;
      }
        
      square++;
    }
  }

  this.turn = tokens[1];

  if (tokens[2].indexOf('K') > -1) {
    this.castling.w += Chess.FLAGS.KSIDE_CASTLE;
  }
  if (tokens[2].indexOf('Q') > -1) {
    this.castling.w += Chess.FLAGS.QSIDE_CASTLE;
  }
  if (tokens[2].indexOf('k') > -1) {
    this.castling.b += Chess.FLAGS.KSIDE_CASTLE;
  }
  if (tokens[2].indexOf('q') > -1) {
    this.castling.b += Chess.FLAGS.QSIDE_CASTLE;
  }

  this.ep_square = (tokens[3] == '-') ? -1 : square_num(tokens[3]);
  this.half_moves = parseInt(tokens[4], 10);
  this.move_number = parseInt(tokens[5], 10);
}


Chess.prototype.moves = function(settings) {

  function add_move(board, moves, from, to, flags) {
    /* if pawn promotion */
    if (board[from].type == Chess.PAWN && 
       (rank(to) == Chess.RANK_8 || rank(to) == Chess.RANK_1)) {
        var pieces = [Chess.QUEEN, Chess.ROOK, Chess.BISHOP, Chess.KNIGHT];
        for (var i = 0; i < pieces.length; i++) {
          var promotion = {
            from: from,
            to: to,
            flags: flags + Chess.FLAGS.PROMOTION,
            new_piece: {type: pieces[i], color: board[from].color},
            old_piece: board[from],
            captured_piece: board[to],
          };
          moves.push(promotion);
        }
    } else {
      var move = {
        from: from,
        to: to,
        flags: flags,
        new_piece: board[from],
        old_piece: board[from],
        captured_piece: board[to],
      };

      moves.push(move);
    }
  }

  /* convert a move from algebraic coordinates to algebraic notation */
  function to_string(chess, move) {
    var output = '';

    if (move.flags.indexOf(Chess.FLAGS.KSIDE_CASTLE) > -1) {
      output = 'O-O';
    } else if (move.flags.indexOf(Chess.FLAGS.QSIDE_CASTLE) > -1) {
      output = 'O-O-O';
    } else {
      var moves = chess.moves({legal: false, algebraic: false});
      var indicator = '';

      for (var i = 0; i < moves.length; i++) {
        var color = chess.color;
        if (move.from != moves[i].from && 
            move.to == moves[i].to &&
            move.old_piece.type == moves[i].old_piece.type) {
          chess.make_move(moves[i]);

          if (!chess.king_attacked(color)) {
            if (rank(move.from) == rank(moves[i].from)) {
              indicator = algebraic(move.from)[0];
            } else if (file(move.from) == file(moves[i].from)) {
              indicator = algebraic(move.from)[1];
            }
          }
          chess.undo_move();
        }
      }

      if (move.old_piece.type != Chess.PAWN) {
        output += move.old_piece.type.toUpperCase() + indicator;
      }

      if (move.flags.indexOf(Chess.FLAGS.CAPTURE) > -1 &&
          move.flags.indexOf(Chess.FLAGS.EP_CAPTURE)) {
        if (move.old_piece.type == Chess.PAWN) {
          output += algebraic(move.from)[0];
        }
        output += 'x';    
      }

      output += algebraic(move.to);

      if (move.flags.indexOf(Chess.FLAGS.PROMOTION) > -1) {
        output += '=' + move.new_piece.type.toUpperCase();
      }
    }

    chess.make_move(move);
    if (chess.in_check()) {
      if (chess.in_checkmate()) {
        output += '#';
      } else {
        output += '+';
      }
    }
    chess.undo_move();

    return output;
  }

  var moves = [];
  var color = this.turn;
  var opponent_color = swap_color(color);
  var second_rank = {b: Chess.RANK_7, w: Chess.RANK_2};

  for (var i = 0; i < this.board.length; i++) {
    piece = this.board[i];
    if (piece == null || piece.color != color) {
      continue;
    }

    if (piece.type == Chess.PAWN) { 
      /* single square, non-capturing */
      var square = i + Chess.PAWN_OFFSETS[color][0]; 
      if (this.board[square] == null) {
          add_move(this.board, moves, i, square, Chess.FLAGS.NORMAL);

        /* double square */
        var square = i + Chess.PAWN_OFFSETS[color][1]; 
        if (second_rank[color] == rank(i) && this.board[square] == null) {
          add_move(this.board, moves, i, square, Chess.FLAGS.BIG_PAWN);
        }
      }
      
      /* pawn captures */
      for (j = 2; j < 4; j++) {
        var square = i + Chess.PAWN_OFFSETS[color][j];
        if (square & 0x88) continue;

        if (this.board[square] != null && 
            this.board[square].color == opponent_color) {
            add_move(this.board, moves, i, square, Chess.FLAGS.CAPTURE);
        } else if (square == this.ep_square) {
            add_move(this.board, moves, i, this.ep_square, Chess.FLAGS.EP_CAPTURE);
        }
      }
    } else {
      for (var j = 0; j < Chess.PIECE_OFFSETS[piece.type].length; j++) {
        var offset = Chess.PIECE_OFFSETS[piece.type][j];
        var square = i;

        while (true) {
          square += offset;
          if (square & 0x88) break;

          if (this.board[square] == null) {
            add_move(this.board, moves, i, square, Chess.FLAGS.NORMAL);
          } else {
            if (this.board[square].color == color) break;
            add_move(this.board, moves, i, square, Chess.FLAGS.CAPTURE);
            break;
          }

          /* break, if knight or king */
          if (piece.type == 'n' || piece.type == 'k') break;
        }
      }
    }
  }

  /* king-side castling */
  if (this.castling[this.turn].indexOf(Chess.FLAGS.KSIDE_CASTLE) > -1) {
    var castling_from = this.kings[this.turn];
    var castling_to = castling_from + 2;

    if (this.board[castling_from + 1] == null &&
        this.board[castling_to]       == null &&
        !this.attacked(opponent_color, this.kings[this.turn]) &&
        !this.attacked(opponent_color, castling_from + 1) &&
        !this.attacked(opponent_color, castling_to)) {
      add_move(this.board, moves, this.kings[this.turn] , castling_to, 
               Chess.FLAGS.KSIDE_CASTLE);
    }
  }

  /* queen-side castling */
  if (this.castling[this.turn].indexOf(Chess.FLAGS.QSIDE_CASTLE) > -1) {
    var castling_from = this.kings[this.turn];
    var castling_to = castling_from - 2;

    if (this.board[castling_from - 1] == null &&
        this.board[castling_from - 2] == null &&
        this.board[castling_from - 3] == null &&
        !this.attacked(opponent_color, this.kings[this.turn]) &&
        !this.attacked(opponent_color, castling_from - 1) &&
        !this.attacked(opponent_color, castling_to)) {
      add_move(this.board, moves, this.kings[this.turn], castling_to, 
               Chess.FLAGS.QSIDE_CASTLE);
    }
  }

  /* if no parameters passed in, assume legal w/ algebraic moves */
  if (typeof(settings) == 'undefined') {
    settings = {legal: true, algebraic: true};
  }

  /* add string descriptions of the move, e.g.: Nxf6+, e5, Qd3#, or O-O-O */
  if (settings.algebraic == true) {
    for (var i = 0; i < moves.length; i++) {
      moves[i].move = to_string(this, moves[i]);
    }
  }

  /* return all pseudo-legal moves (this includes moves that allow the king 
   * to be captured
   */
  if (settings.legal != null && settings.legal == false) {
    return moves;
  }

  /* filter out illegal moves */
  var legal_moves = [];
  for (var i = 0; i < moves.length; i++) {
    this.make_move(moves[i]);
    if (!this.king_attacked(color)) {
      legal_moves.push(moves[i]);
    }
    this.undo_move();
  }

  return legal_moves;
}

Chess.prototype.attacked = function(color, square) {
  for (var i = 0; i < this.board.length; i++) {
    if (i & 0x88) { i += 7; continue; }

    /* if empty square or wrong color */
    if (this.board[i] == null || this.board[i].color != color) continue;

    var piece = this.board[i];
    var difference = i - square;
    var index = difference + 119;
  
    if (Chess.ATTACKS[index] & (1 << Chess.SHIFTS[piece.type])) {
      if (piece.type == Chess.PAWN) {
        if (difference > 0) {
          if (piece.color == Chess.WHITE) return true;
        } else {
          if (piece.color == Chess.BLACK) return true;
        }                 
        continue; 
      }       

      /* if the piece is a knight or a king */
      if (piece.type == 'n' || piece.type == 'k') return true;

      var offset = Chess.RAYS[index];
      var j = i + offset;

      var blocked = false;
      while (j != square) {           
        if (this.board[j] != null) { blocked = true; break; }   
        j += offset;
      }

      if (!blocked) return true;
    }
  }

  return false;
}

Chess.prototype.king_attacked = function(color) {
  return this.attacked(swap_color(color), this.kings[color]);
}

Chess.prototype.in_check = function() {
  return this.king_attacked(this.turn);
}

Chess.prototype.in_checkmate = function() {
  if (!this.in_check()) {
    return false;
  }

  var moves = this.moves({legal: true, algebraic: false});
  return moves.length == 0;
}

Chess.prototype.in_stalemate = function() {
  if (this.in_check()) {
    return false;
  }

  var moves = this.moves({legal: true, algebraic: false});
  return moves.length == 0;
}

Chess.prototype.push = function() {
  this.history.push({
    board: this.board.slice(),
    kings: {b: this.kings.b, w: this.kings.w},
    turn: this.turn,
    castling: {b: this.castling.b, w: this.castling.w},
    ep_square: this.ep_square,
    half_moves: this.half_moves,
    move_number: this.move_number,
    history: this.history.slice()
  });
}

Chess.prototype.make_move = function(move) {
  var opponent_color = swap_color(this.turn);
  this.push();

  this.board[move.to] = this.board[move.from];
  this.board[move.from] = null;

  /* if ep capture, remove the captured pawn */
  if (move.flags.indexOf(Chess.FLAGS.EP_CAPTURE) > -1) {
    if (this.turn == 'b') {
      this.board[move.to - 16] = null;
    } else {
      this.board[move.to + 16] = null;
    }
  }

  /* if pawn promotion, replace with new piece */
  if (move.flags.indexOf(Chess.FLAGS.PROMOTION) > -1) {
    this.board[move.to] = move.new_piece;
  }

  /* if we moved the king */
  if (this.board[move.to].type == Chess.KING) {
    this.kings[this.board[move.to].color] = move.to;
    
    /* if we castled, move the rook next to the king */
    if (move.flags.indexOf(Chess.FLAGS.KSIDE_CASTLE) > -1) {
      var castling_to = move.to - 1;
      var castling_from = move.to + 1;
      this.board[castling_to] = this.board[castling_from];
      this.board[castling_from] = null;
    } else if (move.flags.indexOf(Chess.FLAGS.QSIDE_CASTLE) > -1) {
      var castling_to = move.to + 1;
      var castling_from = move.to - 2;
      this.board[castling_to] = this.board[castling_from];
      this.board[castling_from] = null;
    }
      
    /* turn off castling */
    this.castling[this.turn] = '';
  }

  /* turn off castling if we move a rook */
  if (this.castling[this.turn] != '') {

    for (var i = 0; i < Chess.ROOKS[this.turn].length; i++) {
      if (move.from == Chess.ROOKS[this.turn][i].square) {
        this.castling[this.turn] = 
          this.castling[this.turn].replace(Chess.ROOKS[this.turn][i].flag);
        break;
      }
    }
  }

  /* turn off castling if we capture a rook */
  if (this.castling[opponent_color] != '') {
    for (var i = 0; i < Chess.ROOKS[opponent_color].length; i++) {
      if (move.to == Chess.ROOKS[opponent_color][i].square) {
        this.castling[opponent_color] = 
          this.castling[opponent_color].replace(Chess.ROOKS[opponent_color][i].flag);
        break;
      }
    }
  }

  /* if big pawn move, update the en passant square */
  if (move.flags.indexOf(Chess.FLAGS.BIG_PAWN) > -1) {
    if (this.turn == 'b') {
      this.ep_square = move.to - 16;
    } else { 
      this.ep_square = move.to + 16;
    }
  } else {
    this.ep_square = -1;
  }

  /* reset the 50 move counter if a pawn is moved or a piece is captured */
  if (move.old_piece.type == Chess.PAWN) {
    this.half_moves = 0;
  } else if (move.flags.indexOf(Chess.FLAGS.CAPTURE) > -1) {
    this.half_moves = 0;
  } else {
    this.half_moves++;
  }

  if (this.turn == Chess.BLACK) {
    this.move_number++;
  }
  this.turn = swap_color(this.turn);
}

Chess.prototype.undo_move = function() {
  old = this.history.pop();
  this.board = old.board;
  this.kings = old.kings;
  this.turn = old.turn;
  this.castling = old.castling;
  this.ep_square = old.ep_square;
  this.half_moves = old.half_moves;
  this.move_number = old.move_number;
  this.history = old.history;
}

/******************************************************************************
 * UTILIY FUNCTIONS
 *****************************************************************************/
function rank(i) {
  return i >> 4;
}

function file(i) {
  return i & 15;
}

function algebraic(i) {
  return 'abcdefgh'[file(i)] + '87654321'[rank(i)];
}

function swap_color(c) {
  return c == Chess.WHITE ? Chess.BLACK : Chess.WHITE;
}

function is_digit(c) {
  return '0123456789'.indexOf(c) != -1
}

function square_num(s) {
  return ((8 - parseInt(s[1], 10)) * 16) + (s.charCodeAt(0) - 97)
}

/******************************************************************************
 * DEBUGGING UTILITIES
 *****************************************************************************/
Chess.prototype.log_board = function() { 
  var console = document.getElementById('console');
  var s = '';
  for (var i = 0; i < 128; i++) {
    if (this.board[i] != null) {
      s += (this.board[i].color == Chess.WHITE) ? 
        this.board[i].type.toUpperCase() : this.board[i].type.toLowerCase();
    } else {
      s += '-';
    }
    if ((i + 1) & 0x88) {
      console.innerHTML += s + '<br />';
      s = '';
      i += 8;
    }
  }
  return s;
}

Chess.prototype.log_moves = function(legal) {
  var console = document.getElementById('console');

  if (typeof(legal) == 'undefined') {
    var legal = true;
  }
  var moves = this.moves({legal: legal, algebraic: true});
  for (var i = 0; i < moves.length; i++) {
    console.innerHTML += '#' + i + ' ' + moves[i].move + ' ' + 
                         algebraic(moves[i].from) + '-' + 
                         algebraic(moves[i].to) + '  ' + 
                         moves[i].flags + '<br />';
  }
}

Chess.prototype.perft = function(depth) {
  var moves = this.moves({legal: false, algebraic: false})
  var nodes = 0;
  var color = this.turn;

  for (var i = 0; i < moves.length; i++) {
    this.make_move(moves[i]);
    if (!this.king_attacked(color)) {
      if (depth - 1 > 0) {
        var child_nodes = this.perft(depth - 1);
        nodes += child_nodes;
        //console.log(depth + '-' + i + ' ' + algebraic(moves[i].from) + '-' +
        //            algebraic(moves[i].to) + ', ' +
        //            moves[i].new_piece.type + ' = ' + child_nodes);
      } else {
        nodes++;
      }
    }
    this.undo_move();
  }

  return nodes;
}